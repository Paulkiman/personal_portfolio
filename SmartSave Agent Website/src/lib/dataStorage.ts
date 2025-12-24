import * as fs from 'fs/promises';
import * as path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SIGNUPS_FILE = path.join(DATA_DIR, 'signups.csv');

interface SignupData {
  fullName: string;
  email: string;
  plan: string;
  timestamp: string;
  source: string;
}

const ensureDataDirectory = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
};

const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const initializeCSV = async () => {
  const exists = await fileExists(SIGNUPS_FILE);
  if (!exists) {
    const headers = 'Full Name,Email,Selected Plan,Signup Timestamp,Source\n';
    await fs.writeFile(SIGNUPS_FILE, headers, 'utf-8');
  }
};

export const saveSignup = async (data: SignupData): Promise<boolean> => {
  try {
    await ensureDataDirectory();
    await initializeCSV();

    const csvRow = [
      `"${data.fullName.replace(/"/g, '""')}"`,
      `"${data.email.replace(/"/g, '""')}"`,
      `"${data.plan.replace(/"/g, '""')}"`,
      `"${data.timestamp}"`,
      `"${data.source}"`,
    ].join(',') + '\n';

    await fs.appendFile(SIGNUPS_FILE, csvRow, 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving signup data:', error);
    return false;
  }
};

export const getSignups = async (): Promise<SignupData[]> => {
  try {
    const exists = await fileExists(SIGNUPS_FILE);
    if (!exists) {
      return [];
    }

    const content = await fs.readFile(SIGNUPS_FILE, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    
    if (lines.length <= 1) return [];

    const signups: SignupData[] = [];
    
    // Parse CSV with quoted fields support
    for (let i = 1; i < lines.length; i++) {
      const fields = parseCSVLine(lines[i]);
      if (fields.length >= 5) {
        signups.push({
          fullName: fields[0],
          email: fields[1],
          plan: fields[2],
          timestamp: fields[3],
          source: fields[4],
        });
      }
    }

    return signups;
  } catch (error) {
    console.error('Error reading signup data:', error);
    return [];
  }
};

// Simple CSV parser that handles quoted fields
const parseCSVLine = (line: string): string[] => {
  const fields: string[] = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      fields.push(currentField.trim());
      currentField = '';
    } else {
      currentField += char;
    }
  }

  fields.push(currentField.trim());
  return fields;
};

export const getSignupAnalytics = async () => {
  const signups = await getSignups();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

  let totalSignups = signups.length;
  let signupsToday = 0;
  let signupsThisWeek = 0;
  let signupsThisMonth = 0;
  const signupsByDate: Record<string, number> = {};
  const signupsByPlan: Record<string, number> = {};

  signups.forEach(signup => {
    const signupDate = new Date(signup.timestamp);
    const signupDateOnly = new Date(signupDate.getFullYear(), signupDate.getMonth(), signupDate.getDate());
    const dateKey = signupDate.toISOString().split('T')[0];

    signupsByDate[dateKey] = (signupsByDate[dateKey] || 0) + 1;
    signupsByPlan[signup.plan] = (signupsByPlan[signup.plan] || 0) + 1;

    if (signupDateOnly.getTime() === today.getTime()) {
      signupsToday++;
    }

    if (signupDate >= weekAgo) {
      signupsThisWeek++;
    }

    if (signupDate >= monthAgo) {
      signupsThisMonth++;
    }
  });

  return {
    totalSignups,
    signupsToday,
    signupsThisWeek,
    signupsThisMonth,
    signupsByDate,
    signupsByPlan,
  };
};

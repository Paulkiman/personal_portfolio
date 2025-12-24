import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  adminEmail: string | null;
  login: (email: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Three predefined admin emails
const ADMIN_EMAILS = [
  'admin@smartsave.io',
  'analytics@smartsave.io',
  'ops@smartsave.io'
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check localStorage for existing session on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const storedEmail = localStorage.getItem('admin_email');
    const storedToken = localStorage.getItem('admin_token');

    if (storedEmail && storedToken && validateToken(storedToken)) {
      setAdminEmail(storedEmail);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const generateToken = (email: string): string => {
    // Simple token generation using timestamp and email hash
    const timestamp = Date.now();
    const hash = btoa(email + timestamp);
    return `${timestamp}.${hash}`;
  };

  const validateToken = (token: string): boolean => {
    try {
      const [timestamp, hash] = token.split('.');
      const tokenTime = parseInt(timestamp);
      const now = Date.now();
      // Token valid for 7 days
      const tokenExpiry = 7 * 24 * 60 * 60 * 1000;
      return now - tokenTime < tokenExpiry;
    } catch {
      return false;
    }
  };

  const login = async (email: string): Promise<boolean> => {
    // Check if email is in authorized admin list
    if (!ADMIN_EMAILS.includes(email.toLowerCase())) {
      return false;
    }

    // Simulate a brief auth delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const token = generateToken(email);
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_email', email);
      localStorage.setItem('admin_token', token);
    }
    setAdminEmail(email);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_email');
      localStorage.removeItem('admin_token');
    }
    setAdminEmail(null);
    setIsAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, adminEmail, login, logout, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

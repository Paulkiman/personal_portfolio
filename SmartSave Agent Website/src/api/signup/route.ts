import { NextRequest, NextResponse } from 'next/server';
import { saveSignup } from '@/lib/dataStorage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, plan } = body;

    // Validate input
    if (!fullName || !email || !plan) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save signup data
    const timestamp = new Date().toISOString();
    const success = await saveSignup({
      fullName,
      email,
      plan,
      timestamp,
      source: 'Website',
    });

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to save signup data' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Signup successful',
        timestamp 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

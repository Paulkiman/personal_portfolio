import { NextRequest, NextResponse } from 'next/server';
import { getSignupAnalytics } from '@/lib/dataStorage';

export async function GET(request: NextRequest) {
  try {
    // In production, you'd validate admin authentication here
    // For now, we provide the endpoint and assume Header/middleware validates access
    
    const analytics = await getSignupAnalytics();
    
    return NextResponse.json(analytics, { status: 200 });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

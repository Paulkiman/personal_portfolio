'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  totalSignups: number;
  signupsToday: number;
  signupsThisWeek: number;
  signupsThisMonth: number;
  signupsByDate: Record<string, number>;
  signupsByPlan: Record<string, number>;
}

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/admin/analytics');
      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      setError('Failed to load analytics data');
      console.error('Analytics error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-slate-400">Loading analytics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (!analytics) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-slate-50 p-8 md:p-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Analytics Dashboard</h1>
        <p className="text-slate-400 text-sm">Real-time signup and engagement metrics</p>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Total Signups */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-slate-700 transition-colors">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-black mb-4">Total Signups</div>
          <motion.div
            key={analytics.totalSignups}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-emerald-500 mb-4"
          >
            {analytics.totalSignups}
          </motion.div>
          <div className="text-xs text-slate-500">All-time</div>
        </div>

        {/* Today */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-slate-700 transition-colors">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-black mb-4">Signups Today</div>
          <motion.div
            key={analytics.signupsToday}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-blue-500 mb-4"
          >
            {analytics.signupsToday}
          </motion.div>
          <div className="text-xs text-slate-500">Last 24 hours</div>
        </div>

        {/* This Week */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-slate-700 transition-colors">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-black mb-4">This Week</div>
          <motion.div
            key={analytics.signupsThisWeek}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-violet-500 mb-4"
          >
            {analytics.signupsThisWeek}
          </motion.div>
          <div className="text-xs text-slate-500">Last 7 days</div>
        </div>

        {/* This Month */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-slate-700 transition-colors">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-black mb-4">This Month</div>
          <motion.div
            key={analytics.signupsThisMonth}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-pink-500 mb-4"
          >
            {analytics.signupsThisMonth}
          </motion.div>
          <div className="text-xs text-slate-500">Last 30 days</div>
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plans Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
          <h2 className="text-xl font-black uppercase tracking-tight mb-8">Signups by Plan</h2>
          <div className="space-y-4">
            {Object.entries(analytics.signupsByPlan).map(([plan, count], idx) => {
              const plans = Object.entries(analytics.signupsByPlan);
              const total = plans.reduce((sum, [, c]) => sum + (typeof c === 'number' ? c : 0), 0);
              const countNum = typeof count === 'number' ? count : 0;
              const percentage = total > 0 ? (countNum / total) * 100 : 0;
              const colors = ['bg-emerald-500', 'bg-blue-500', 'bg-violet-500'];

              return (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-slate-300">{plan}</span>
                    <span className="text-lg font-black text-slate-100">{countNum}</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${colors[idx % colors.length]}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-xs text-slate-500">{percentage.toFixed(1)}%</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
          <h2 className="text-xl font-black uppercase tracking-tight mb-8">Recent Activity</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {Object.entries(analytics.signupsByDate)
              .sort()
              .reverse()
              .slice(0, 10)
              .map(([date, count], idx) => {
                const dateObj = new Date(date);
                const formatted = dateObj.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });

                return (
                  <motion.div
                    key={date}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-sm border border-slate-700/50 hover:border-slate-600 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-300">{formatted}</div>
                      <div className="text-xs text-slate-500">{typeof count === 'number' ? count : 0} signup{typeof count === 'number' && count !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="text-lg font-black text-emerald-500">{typeof count === 'number' ? count : 0}</div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
        <p>Last updated: {new Date().toLocaleString()}</p>
        <p className="mt-2">This dashboard is restricted to authorized personnel only.</p>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;

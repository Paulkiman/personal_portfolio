'use client';

import React, { useEffect } from 'react';
import { useAdmin } from '@/context/AdminContext';
import AdminDashboard from '@/components/AdminDashboard';

const AdminDashboardPage: React.FC = () => {
  const { isAuthenticated, isLoading, logout } = useAdmin();
  const [shouldRender, setShouldRender] = React.useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // Redirect to home if not authenticated
        window.location.href = '/';
      } else {
        setShouldRender(true);
      }
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-slate-400 text-sm">Initializing admin access...</div>
      </div>
    );
  }

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Admin Header with Logout */}
      <div className="fixed top-0 right-0 z-40 p-6 md:p-8">
        <button
          onClick={logout}
          className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 hover:text-slate-200 transition-colors"
        >
          LOGOUT
        </button>
      </div>

      {/* Dashboard Content */}
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardPage;

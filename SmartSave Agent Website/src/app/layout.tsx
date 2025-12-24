import type { Metadata } from 'next';
import { AdminProvider } from '@/context/AdminContext';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'SmartSave Agent',
  description: 'Smart financial planning and analytics platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}

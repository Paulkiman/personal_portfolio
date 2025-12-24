'use client';

import React from 'react';
import './globals.css';
import { AdminProvider } from '@/context/AdminContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SmartSave Agent</title>
        <meta name="description" content="Financial automation architecture for African markets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}

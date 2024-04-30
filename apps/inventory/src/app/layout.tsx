'use client';
import './styles.css';
import { StrictMode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: never;
}) {
  return (
    <StrictMode>
      <html lang="en" className="dark">
        <head>
          <meta charSet="utf-8" />
          <title>Inventory</title>
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body
          className={cn(inter.className, {
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        >
          <header className="p-2 font-mono font-bold text-center">
            <p>Header</p>
          </header>
          {children}
          <footer className="p-2 font-mono font-bold text-center">
            <p>Footer</p>
          </footer>
        </body>
      </html>
    </StrictMode>
  );
}

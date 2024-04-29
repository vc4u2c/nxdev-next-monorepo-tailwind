'use client';
import './styles.css';
import { StrictMode } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Inventory</title>
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body>
          <header>
            <p>Header</p>
          </header>
          {children}
          <footer>
            <p>Footer</p>
          </footer>
        </body>
      </html>
    </StrictMode>
  );
}

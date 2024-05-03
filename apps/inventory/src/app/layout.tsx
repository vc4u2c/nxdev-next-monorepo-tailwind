'use client';
import './styles.css';
import { StrictMode } from 'react';
import { cn } from '@/lib/utils';
import { Header, HeaderAppInfo, HeaderUserInfo } from '@/lib/ui/header';
import { SidebarDesktop } from '@/lib/ui/sidebar-desktop';
import { Footer } from '@/lib/ui/footer';
import { ThemeProvider } from '@/lib/ui/theme-provider';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerAppInfo: HeaderAppInfo = {
    companyName: 'Acme Inc.',
    companyIcon: '/company.svg',
    appName: 'Inventory Management',
    appIcon: '/app.svg',
  };
  const headerUserInfo: HeaderUserInfo = {
    name: 'Vinod Chandran',
    email: 'vc4u2c@gmail.com',
    avatar: '/profile.jpg',
  };

  return (
    <StrictMode>
      <html lang="en" className="dark" suppressHydrationWarning={true}>
        <head>
          <meta charSet="utf-8" />
          <title>Inventory</title>
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body
          className={cn('min-h-screen w-full flex flex-col', inter.className, {
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        >
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header
              headerAppInfo={headerAppInfo}
              headerUserInfo={headerUserInfo}
            />
            <div className="flex flex-grow">
              <SidebarDesktop />
              <main className="p-4 flex justify-center items-start">{children}</main>
            </div>
            <Footer companyName="Acme Inc." />
          </ThemeProvider>
        </body>
      </html>
    </StrictMode>
  );
}

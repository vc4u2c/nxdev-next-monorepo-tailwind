'use client';
import { useEffect, useState } from 'react';
import { Nav } from './nav';
import {
  ShoppingCart,
  LayoutDashboard,
  Settings,
  ChevronRight,
  ChevronLeft,
  UserRound,
  Home,
} from 'lucide-react';
import { Button } from './button';
import { useWindowWidth } from '@react-hook/window-size';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SidebarDesktopProps {}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const isOnlyMobile = useWindowWidth() < 768;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isOnlyMobile);
  }, [isOnlyMobile]);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-2 py-4">
      {!isMobile && (
        <div className="absolute right-[-14px] top-0">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2 w-7 h-7"
          >
            {isMobile || isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={isMobile ? true : isCollapsed}
        links={[
          {
            title: 'Home',
            href: '/',
            icon: Home,
            variant: 'ghost',
          },
          {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
            variant: 'ghost',
          },
          {
            title: 'Profile',
            href: '/profile',
            icon: UserRound,
            variant: 'ghost',
          },
          {
            title: 'Orders',
            href: '/orders',
            icon: ShoppingCart,
            variant: 'ghost',
          },
          {
            title: 'Settings',
            href: '/settings',
            icon: Settings,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  );
}

export default SidebarDesktop;

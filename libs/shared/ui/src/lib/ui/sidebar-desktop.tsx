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
    <div className="relative min-w-[80px] border-r px-2 pb-2 pt-12">
      {!isMobile && (
        <div className="absolute right-[-20px] top-0">
          <Button
            onClick={toggleSidebar} 
            variant="secondary"
            className=" rounded-full p-2"
          >
            {isMobile || isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={isMobile ? true : isCollapsed}
        links={[
          {
            title: 'Dashboard',
            href: '/',
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

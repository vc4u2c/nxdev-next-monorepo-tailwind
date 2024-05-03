'use client';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SidebarDesktopProps {}

export function SidebarDesktop(props: SidebarDesktopProps) {
  return (
    <aside className="p-4 w-80 border-r">
      <p>Sidebar</p>
    </aside>
  );
}

export default SidebarDesktop;

'use client';
import Image from 'next/image';
import { Separator } from './separator';
import { AvatarDropdown } from './avatar-dropdown';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import Help from './help';

export interface HeaderAppInfo {
  companyName: string;
  companyIcon: string;
  appName: string;
  appIcon: string;
}
export interface HeaderUserInfo {
  name: string;
  email: string;
  avatar: string;
}

export interface HeaderProps {
  headerAppInfo: HeaderAppInfo;
  headerUserInfo: HeaderUserInfo;
}

export function Header(props: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0 pt-0.5">
        <div className="flex flex-1 h-8 items-center justify-start pl-2">
          <Link href="/" className="flex items-center space-x-2 pr-2">
            <Image
              src={props.headerAppInfo.companyIcon}
              alt={props.headerAppInfo.companyName}
              className="dark:invert max-sm:w-10 max-sm:h-10"
              width={50}
              height={50}
              priority
            />
            <span className="inline-block font-bold text-2xl max-sm:hidden">
              {props.headerAppInfo.companyName}
            </span>
          </Link>
          <Separator orientation="vertical" className="w-[2px]" />
          <Link href="/" className="flex items-center space-x-2 pl-2">
            <Image
              src={props.headerAppInfo.appIcon}
              alt={props.headerAppInfo.appName}
              className="dark:invert max-sm:w-6 max-sm:h-6"
              width={30}
              height={30}
              priority
            />
            <span className="inline-block font-semibold max-sm:text-xs">
              {props.headerAppInfo.appName}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 pr-2">
          <nav className="flex items-center space-x-4">
            <Help />
            <ThemeToggle />
            <div className="max-sm:hidden">
              <div className="text-xs">{props.headerUserInfo.name}</div>
              <Separator />
              <div className="text-xs">{props.headerUserInfo.email}</div>
            </div>
            <AvatarDropdown
              name={props.headerUserInfo.name}
              avatar={props.headerUserInfo.avatar}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

'use client';
import Image from 'next/image';
import { Separator } from './separator';
import { AvatarDropdown } from './avatar-dropdown';
import { ThemeToggle } from './theme-toggle';

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

function nameToInitials(fullName: string) {
  const nameParts = fullName.split(' ');
  let initials = '';
  for (const part of nameParts) {
    initials += part.charAt(0).toUpperCase();
  }
  return initials;
}

export function Header(props: HeaderProps) {
  return (
    <header className="border-b py-2">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <div>
              <Image
                src={props.headerAppInfo.companyIcon}
                alt={props.headerAppInfo.companyName}
                className="dark:invert"
                width={60}
                height={60}
                priority
              />
            </div>
          </li>
          <li>
            <div className="font-semibold text-2xl">
              {props.headerAppInfo.companyName}
              <Separator orientation="vertical" />
            </div>
          </li>
          <li>
            <Image
              src={props.headerAppInfo.appIcon}
              alt={props.headerAppInfo.appName}
              className="dark:invert"
              width={40}
              height={40}
              priority
            />
          </li>
          <li>
            <div className="font-semibold text-l">
              {props.headerAppInfo.appName}
            </div>
          </li>
          <li>
            <div className="text-xs">{props.headerUserInfo.name}</div>
            <Separator />
            <div className="text-xs">{props.headerUserInfo.email}</div>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <AvatarDropdown name={props.headerUserInfo.name} avatar={props.headerUserInfo.avatar} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

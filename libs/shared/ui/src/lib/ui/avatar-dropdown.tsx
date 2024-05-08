'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export interface AvatarDropdownProps {
  name: string;
  avatar: string;
}

function nameToInitials(fullName: string) {
  const nameParts = fullName.split(' ');
  let initials = '';
  for (const part of nameParts) {
    initials += part.charAt(0).toUpperCase();
  }
  return initials;
}

export function AvatarDropdown(props: AvatarDropdownProps) {
  const signout = () => {
    console.log('Sign Out');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='cursor-pointer'>
          <AvatarImage src={props.avatar} alt={props.name} />
          <AvatarFallback>{nameToInitials(props.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signout()}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

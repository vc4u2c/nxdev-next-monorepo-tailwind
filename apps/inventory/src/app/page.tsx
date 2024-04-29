'use client';
import { SharedUi } from '@nxdev-next-monorepo-tailwind/shared-ui';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface PageProps {}

export default function Index(props: PageProps) {
  return (
    <div className="bg-indigo-500 p-2 font-mono font-bold text-center">
      <div>
        <h1>Inventory App: Home</h1>
      </div>
      <SharedUi name="Shared UI" />
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
}

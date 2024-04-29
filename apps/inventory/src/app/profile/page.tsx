'use client';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ProfileProps {}

export function Profile(props: ProfileProps) {
  return (
    <div className="bg-yellow-500 p-2 font-mono font-bold text-center">
      <h1>Welcome to Profile!</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Profile;

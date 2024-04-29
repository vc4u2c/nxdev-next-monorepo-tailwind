'use client';
import { OrderList } from '@nxdev-next-monorepo-tailwind/orders';
import { SharedUi } from '@nxdev-next-monorepo-tailwind/shared-ui';

/* eslint-disable-next-line */
export interface PageProps {
}

export default function Index(props: PageProps) {
  return (
    <div>
      <div className="bg-indigo-500 p-2 font-mono font-bold text-center">
        <h1>Inventory App: Home</h1>
      </div>
      <OrderList name="Order List" />
      <SharedUi name="Shared UI" />
    </div>
  );
}

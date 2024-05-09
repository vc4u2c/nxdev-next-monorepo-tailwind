'use client';
import PageTitle from '@/lib/ui/page-title';
import { OrderDetails } from '@nxdev-next-monorepo-tailwind/orders';

/* eslint-disable-next-line */
export interface OrderDetailsProps {}

export default function Orders(props: OrderDetailsProps) {
  return (
    <div className="py-4 border-muted rounded-lg flex flex-col items-center text-center">
      <PageTitle title="Order Details" className="pb-2" />
      <OrderDetails />
    </div>
  );
}

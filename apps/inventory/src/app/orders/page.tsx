'use client';
import PageTitle from '@/lib/ui/page-title';
import { OrderList } from '@nxdev-next-monorepo-tailwind/orders';

/* eslint-disable-next-line */
export interface OrdersProps {}

export default function Orders(props: OrdersProps) {
  return (
    <div className="py-4 border-muted rounded-lg flex flex-col items-center text-center">
      <PageTitle title="Orders" className='pb-2' />
      <OrderList name="Order List"/>
    </div>
  );
}

'use client';
import { OrderList } from '@nxdev-next-monorepo-tailwind/orders';

/* eslint-disable-next-line */
export interface OrdersProps {}

export default function Orders(props: OrdersProps) {
  return (
    <div>
      <OrderList name='Order List' />
    </div>
  );
}

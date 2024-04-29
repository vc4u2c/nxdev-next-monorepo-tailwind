'use client';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface OrderListProps {
  name: string;
}

export function OrderList(props: OrderListProps) {
  const orderId = 100;
  return (
    <div className="bg-green-500 p-2 font-mono font-semibold text-center">
      <h2>{props.name}</h2>
      <h3>
        <Link href="orders/1">Order 1</Link>
      </h3>
      <h3>
        <Link href="orders/2">Order 2</Link>
      </h3>
      <h3>
        <Link href="orders/3">Order 3</Link>
      </h3>
      <h3>
        <Link href={`orders/${orderId}`}>Order {orderId}</Link>
      </h3>      
    </div>
  );
}

export default OrderList;

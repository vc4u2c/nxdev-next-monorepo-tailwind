'use client';
import { useParams } from 'next/navigation';

/* eslint-disable-next-line */
export interface OrderDetailsProps {}

export function OrderDetails(props: OrderDetailsProps) {
  const params = useParams();
  return (
    <div className="bg-gray-500 p-2 font-mono font-semibold text-center">
      <h3>Order Details: {params['orderId']}</h3>
    </div>
  );
}

export default OrderDetails;

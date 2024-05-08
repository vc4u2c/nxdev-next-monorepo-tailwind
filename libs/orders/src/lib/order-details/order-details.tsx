'use client';
import { useParams } from 'next/navigation';

/* eslint-disable-next-line */
export interface OrderDetailsProps {}

export function OrderDetails(props: OrderDetailsProps) {
  const params = useParams();
  return (
    <div className="p-2 font-mono font-semibold text-center">
      {params == null || params['orderId'] == null ? (
        <h3>Order Details</h3>
      ) : (
        <h3>Order Details: {params['orderId']}</h3>
      )}
    </div>
  );
}

export default OrderDetails;

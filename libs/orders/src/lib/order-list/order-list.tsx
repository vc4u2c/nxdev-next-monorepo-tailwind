'use client';

/* eslint-disable-next-line */
export interface OrderListProps {
  name: string;
}

export function OrderList(props: OrderListProps) {
  return (
    <div className="bg-green-500 p-2 font-mono font-semibold text-center">
      <h2>{props.name}</h2>
    </div>
  );
}

export default OrderList;

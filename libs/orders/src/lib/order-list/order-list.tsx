/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
/** @format */
'use client';
import Link from 'next/link';
import { DataTable } from '@/lib/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Badge } from '@/lib/ui/badge';

/* eslint-disable-next-line */
export interface OrderListProps {
  name: string;
}

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'order',
    header: 'Order',
    cell: ({ row }) => {
      const orderId: string = row.getValue('order');
      return <Link href={`orders/${orderId}`}>{orderId}</Link>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <Badge
          className={cn({
            'bg-red-600 dark:bg-red-400': row.getValue('status') === 'Pending',
            'bg-orange-600 dark:bg-orange-400':
              row.getValue('status') === 'Processing',
            'bg-green-600 dark:bg-green-400':
              row.getValue('status') === 'Completed',
          })}
        >
          {row.getValue('status')}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last Order',
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
];

const data: Payment[] = [
  {
    order: 'ORD001',
    status: 'Pending',
    lastOrder: '2023-01-15',
    method: 'Credit Card',
  },
  {
    order: 'ORD002',
    status: 'Processing',
    lastOrder: '2023-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD003',
    status: 'Completed',
    lastOrder: '2023-03-10',
    method: 'Stripe',
  },
  {
    order: 'ORD004',
    status: 'Pending',
    lastOrder: '2023-04-05',
    method: 'Venmo',
  },
  {
    order: 'ORD005',
    status: 'Completed',
    lastOrder: '2023-05-12',
    method: 'Bank Transfer',
  },
  {
    order: 'ORD006',
    status: 'Processing',
    lastOrder: '2023-06-18',
    method: 'Apple Pay',
  },
  {
    order: 'ORD007',
    status: 'Completed',
    lastOrder: '2023-07-22',
    method: 'Google Pay',
  },
  {
    order: 'ORD008',
    status: 'Pending',
    lastOrder: '2023-08-30',
    method: 'Cryptocurrency',
  },
  {
    order: 'ORD009',
    status: 'Processing',
    lastOrder: '2023-09-05',
    method: 'Alipay',
  },
  {
    order: 'ORD010',
    status: 'Completed',
    lastOrder: '2023-10-18',
    method: 'WeChat Pay',
  },
  {
    order: 'ORD011',
    status: 'Pending',
    lastOrder: '2023-11-25',
    method: 'Square Cash',
  },
  {
    order: 'ORD012',
    status: 'Completed',
    lastOrder: '2023-12-08',
    method: 'Zelle',
  },
  {
    order: 'ORD013',
    status: 'Processing',
    lastOrder: '2024-01-15',
    method: 'Stripe',
  },
  {
    order: 'ORD014',
    status: 'Completed',
    lastOrder: '2024-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD015',
    status: 'Pending',
    lastOrder: '2024-03-30',
    method: 'Credit Card',
  },
];

export function OrderList(props: OrderListProps) {
  const orderId = 100;
  return (
    <div className="flex flex-col gap-5 w-3/4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default OrderList;

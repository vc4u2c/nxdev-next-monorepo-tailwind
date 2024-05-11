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
import { Filter } from '@/lib/ui/data-table-toolbar';
import { DataTableRowActions } from '@/lib/ui/data-table-row-actions';
import { Checkbox } from '@/lib/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Badge } from '@/lib/ui/badge';
import { DataTableColumnHeader } from '@/lib/ui/data-table-column-header';
import { CircleDotIcon, CpuIcon, ShieldCheck } from 'lucide-react';

/* eslint-disable-next-line */
export interface OrderListProps {
  name: string;
}

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  amount: number;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'order',
    header: 'Order',
    cell: ({ row }) => {
      const orderId: string = row.getValue('order');
      return <Link href={`orders/${orderId}`}>{orderId}</Link>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'lastOrder',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Last Order" />;
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

const data: Payment[] = [
  {
    order: 'ORD001',
    status: 'Pending',
    lastOrder: '2023-01-15',
    amount: 300,
    method: 'Credit Card',
  },
  {
    order: 'ORD002',
    status: 'Processing',
    lastOrder: '2023-02-20',
    amount: 50.6785,
    method: 'PayPal',
  },
  {
    order: 'ORD003',
    status: 'Completed',
    lastOrder: '2023-03-10',
    amount: 500.76,
    method: 'Stripe',
  },
  {
    order: 'ORD004',
    status: 'Pending',
    lastOrder: '2023-04-05',
    amount: 275.14,
    method: 'Venmo',
  },
  {
    order: 'ORD005',
    status: 'Completed',
    lastOrder: '2023-05-12',
    amount: 112,
    method: 'Bank Transfer',
  },
  {
    order: 'ORD006',
    status: 'Processing',
    lastOrder: '2023-06-18',
    amount: 135.67,
    method: 'Apple Pay',
  },
  {
    order: 'ORD007',
    status: 'Completed',
    lastOrder: '2023-07-22',
    amount: 675.64,
    method: 'Google Pay',
  },
  {
    order: 'ORD008',
    status: 'Pending',
    lastOrder: '2023-08-30',
    amount: 100.14,
    method: 'Cryptocurrency',
  },
  {
    order: 'ORD009',
    status: 'Processing',
    lastOrder: '2023-09-05',
    amount: 300.34,
    method: 'Alipay',
  },
  {
    order: 'ORD010',
    status: 'Completed',
    lastOrder: '2023-10-18',
    amount: 130.14,
    method: 'WeChat Pay',
  },
  {
    order: 'ORD011',
    status: 'Pending',
    lastOrder: '2023-11-25',
    amount: 103.14,
    method: 'Square Cash',
  },
  {
    order: 'ORD012',
    status: 'Completed',
    lastOrder: '2023-12-08',
    amount: 100.14,
    method: 'Zelle',
  },
  {
    order: 'ORD013',
    status: 'Processing',
    lastOrder: '2024-01-15',
    amount: 100.14,
    method: 'Stripe',
  },
  {
    order: 'ORD014',
    status: 'Completed',
    lastOrder: '2024-02-20',
    amount: 130.14,
    method: 'PayPal',
  },
  {
    order: 'ORD015',
    status: 'Pending',
    lastOrder: '2024-03-30',
    amount: 101.14,
    method: 'Credit Card',
  },
];

const filter: Filter = {
  primaryFilterAccessorKey: 'method',
  primaryFilterPlaceholder: 'Filter methods...',
  primaryFacetedFilterAccessorKey: 'status',
  primaryFacetedFilterTitle: 'Status',
  primaryFacetedFilterOptions: [
    {
      label: 'Pending',
      value: 'Pending',
      icon: CircleDotIcon,
    },
    {
      label: 'Processing',
      value: 'Processing',
      icon: CpuIcon,
    },
    {
      label: 'Completed',
      value: 'Completed',
      icon: ShieldCheck,
    },
  ],
};

export function OrderList(props: OrderListProps) {
  const orderId = 100;
  return (
    <div className="flex flex-col gap-5 w-3/4">
      <DataTable columns={columns} data={data} filter={filter} />
    </div>
  );
}

export default OrderList;

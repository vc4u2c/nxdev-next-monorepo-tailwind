import PageTitle from '@/lib/ui/page-title';
import { OrderDetails } from '@nxdev-next-monorepo-tailwind/orders';

/* eslint-disable-next-line */
export interface OrderDetailsProps {}

export async function generateStaticParams() {
  return [
    {
      orderId: 'ORD001',
    },
    {
      orderId: 'ORD002',
    },
    {
      orderId: 'ORD003',
    },
    {
      orderId: 'ORD004',
    },
    {
      orderId: 'ORD005',
    },
    {
      orderId: 'ORD006',
    },
    {
      orderId: 'ORD007',
    },
    {
      orderId: 'ORD008',
    },
    {
      orderId: 'ORD009',
    },
    {
      orderId: 'ORD010',
    },
    {
      orderId: 'ORD011',
    },
    {
      orderId: 'ORD012',
    },
    {
      orderId: 'ORD013',
    },
    {
      orderId: 'ORD014',
    },
    {
      orderId: 'ORD015',
    },
  ];
}

export default function Orders(props: OrderDetailsProps) {
  return (
    <div className="py-4 border-muted rounded-lg flex flex-col items-center text-center">
      <PageTitle title="Order Details" className="pb-2" />
      <OrderDetails />
    </div>
  );
}

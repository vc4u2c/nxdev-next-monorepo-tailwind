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
      orderId: 'ORD0010',
    },
    {
      orderId: 'ORD0011',
    },
    {
      orderId: 'ORD0012',
    },
    {
      orderId: 'ORD0013',
    },
    {
      orderId: 'ORD0014',
    },
    {
      orderId: 'ORD0015',
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

'use client';
import { ProductList } from '@nxdev-next-monorepo-tailwind/products';
import { SharedUi } from '@nxdev-next-monorepo-tailwind/shared-ui';

/* eslint-disable-next-line */
export interface PageProps {
}

export default function Index(props: PageProps) {
  return (
    <div>
      <div className="bg-indigo-500 p-2 font-mono font-bold text-center">
        <h1>Store App: Home</h1>
      </div>
      <ProductList name="Product List" />
      <SharedUi name="Shared UI" />
    </div>
  );
}

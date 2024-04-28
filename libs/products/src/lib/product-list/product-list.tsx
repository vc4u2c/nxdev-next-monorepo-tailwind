'use client';

/* eslint-disable-next-line */
export interface ProductListProps {
  name: string
}

export function ProductList(props: ProductListProps) {
  return (
    <div className="bg-blue-500 p-2 font-mono font-semibold text-center">
      <h1>{props.name}</h1>
    </div>
  );
}

export default ProductList;

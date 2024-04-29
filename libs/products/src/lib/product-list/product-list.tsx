'use client';

/* eslint-disable-next-line */
export interface ProductListProps {
  name: string
}

export function ProductList(props: ProductListProps) {
  return (
    <div className="bg-blue-500 p-2 font-mono font-semibold text-center">
      <h2>{props.name}</h2>
    </div>
  );
}

export default ProductList;

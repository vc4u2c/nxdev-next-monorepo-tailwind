'use client';
import { Button } from './ui/button';

/* eslint-disable-next-line */
export interface SharedUiProps {
  name: string;
}

export function SharedUi(props: SharedUiProps) {
  return (
    <>
      <div className="bg-red-500 p-2 font-mono font-semibold text-center">
        <h2>{props.name}</h2>
        <Button>Show UI</Button>
      </div>
    </>
  );
}

export default SharedUi;

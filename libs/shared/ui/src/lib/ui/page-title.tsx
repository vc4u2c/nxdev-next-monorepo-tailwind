'use client';
import { cn } from '../utils';

type Props = {
  title: string;
  className?: string;
};

export function PageTitle({ title, className }: Props) {
  return <h1 className={cn('text-2xl font-semibold', className)}>{title}</h1>;
}

export default PageTitle;

'use client';
import { Button } from '@/lib/ui/button';

/* eslint-disable-next-line */
export interface PageProps {}

export default function Index(props: PageProps) {
  return (
    <main>
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Inventory Home</h1>
        <p className="text-2xl text-muted-foreground">
          This is the Acme Incorporation&apos;s Inventory Management application.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button variant={'secondary'}>Learn More</Button>
        <Button>Contact Us</Button>
      </div>
    </main>
  );
}

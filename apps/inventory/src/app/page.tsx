'use client';
import { Button } from '@/lib/ui/button';
import PageTitle from '@/lib/ui/page-title';

/* eslint-disable-next-line */
export interface PageProps {}

export default function Index(props: PageProps) {
  return (
    <main>
      <section className="py-4 border-muted rounded-lg flex flex-col items-center text-center">
        <PageTitle title="Inventory Home!!!!!!!!!!!!!!" />
        <p className="text-xl text-muted-foreground">
          This is the Acme Incorporation&apos;s Inventory Management
          application.
        </p>
      </section>
      <section className="flex gap-6 items-center justify-center">
        <Button variant={'secondary'}>Learn More</Button>
        <Button>Contact Us</Button>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section min-h-[70vh] flex items-center justify-center text-center">
      <div>
        <p className="text-8xl md:text-[120px] font-bold leading-none select-none" style={{ color: '#dc3545' }}>
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight" style={{ color: '#000000' }}>
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-3 max-w-sm mx-auto text-sm" style={{ color: '#606060' }}>
          The link may be broken or the page may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft size={17} /> Back to Home
        </Link>
      </div>
    </section>
  );
}

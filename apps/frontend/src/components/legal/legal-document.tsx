import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export function LegalDocument({
  title,
  activePage,
  children,
}: {
  title: string;
  activePage: 'privacy' | 'terms';
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0e] text-[#f5f7fb]">
      <header className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto flex min-h-[76px] max-w-[1080px] flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/auth" aria-label="Postu home">
            <Image
              src="/postu-logo.png"
              alt="Postu"
              width={298}
              height={109}
              priority
              className="h-auto w-[144px]"
            />
          </Link>
          <nav
            className="flex gap-5 text-sm text-white/70"
            aria-label="Legal pages"
          >
            <Link
              href="/privacy-policy"
              aria-current={activePage === 'privacy' ? 'page' : undefined}
              className="transition-colors hover:text-white aria-[current=page]:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              aria-current={activePage === 'terms' ? 'page' : undefined}
              className="transition-colors hover:text-white aria-[current=page]:text-white"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Postu.io legal
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-6 leading-7 text-white/65">
            Operated by Sole Proprietor Nikita Lomov
            <br />
            Moscow, Russian Federation
            <br />
            Contact:{' '}
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="mailto:hi@postu.io"
            >
              hi@postu.io
            </a>
          </p>
        </header>
        <div className="space-y-9">{children}</div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1080px] justify-between px-5 py-7 text-sm text-white/55 sm:px-8">
          <span>Postu.io</span>
          <Link className="hover:text-white" href="/auth">
            Return to Postu
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 leading-7 text-white/70 [&_a]:text-cyan-300 [&_a]:hover:text-cyan-200 [&_li]:ml-6 [&_li]:list-disc">
        {children}
      </div>
    </section>
  );
}

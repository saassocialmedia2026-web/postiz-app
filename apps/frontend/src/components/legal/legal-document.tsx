import { ReactNode } from 'react';
import { PublicSiteFooter } from '@gitroom/frontend/components/public-site/public-site-footer';
import { PublicSiteHeader } from '@gitroom/frontend/components/public-site/public-site-header';

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  activePage: 'privacy' | 'terms';
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0e] text-[#f5f7fb]">
      <PublicSiteHeader />

      <main className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#49e5d8]">
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
              className="text-[#49e5d8] hover:text-[#7af0e6]"
              href="mailto:hi@postu.io"
            >
              hi@postu.io
            </a>
          </p>
        </header>
        <div className="space-y-9">{children}</div>
      </main>

      <PublicSiteFooter />
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
      <div className="space-y-3 leading-7 text-white/70 [&_a]:text-[#49e5d8] [&_a]:hover:text-[#7af0e6] [&_li]:ml-6 [&_li]:list-disc">
        {children}
      </div>
    </section>
  );
}

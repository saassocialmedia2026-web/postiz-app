import Image from 'next/image';
import Link from 'next/link';

export function PublicSiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#080b0d]/95">
      <div className="mx-auto flex min-h-[76px] max-w-[1180px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Postu home">
          <Image
            src="/postu-logo.png"
            alt="Postu"
            width={298}
            height={109}
            priority
            className="h-auto w-[138px]"
          />
        </Link>

        <nav
          className="order-3 flex w-full justify-center gap-5 text-sm text-white/65 sm:order-none sm:w-auto sm:gap-8"
          aria-label="Main navigation"
        >
          <Link
            className="transition-colors hover:text-white"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="transition-colors hover:text-white"
            href="/#how-it-works"
          >
            How it works
          </Link>
          <Link className="transition-colors hover:text-white" href="/#faq">
            FAQ
          </Link>
        </nav>

        <Link
          href="/auth"
          className="rounded-md bg-[#18d5c5] px-5 py-2.5 text-sm font-semibold text-[#04110f] transition-colors hover:bg-[#45e6d8]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

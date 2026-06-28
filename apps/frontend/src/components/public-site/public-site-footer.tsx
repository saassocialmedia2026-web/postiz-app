import Image from 'next/image';
import Link from 'next/link';

export function PublicSiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080b0d]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-[560px]">
            <Link href="/" aria-label="Postu home">
              <Image
                src="/postu-logo.png"
                alt="Postu"
                width={298}
                height={109}
                className="h-auto w-[138px]"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/55">
              Schedule and publish to your own connected accounts. Postu only
              performs actions you explicitly authorize.
            </p>
            <a
              href="mailto:hi@postu.io"
              className="mt-4 inline-block text-sm font-medium text-[#49e5d8] hover:text-[#7af0e6]"
            >
              hi@postu.io
            </a>
          </div>

          <nav
            className="flex flex-col gap-3 text-sm text-white/60"
            aria-label="Legal navigation"
          >
            <Link className="hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
            <a
              className="hover:text-white"
              href="https://github.com/saassocialmedia2026-web/postiz-app"
              rel="noreferrer"
              target="_blank"
            >
              Source code
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-5 text-white/40">
          <p>Copyright 2026 Postu.io. All rights reserved.</p>
          <p>Sole Proprietor Nikita Lomov</p>
          <p className="mt-3 max-w-[760px]">
            Meta Platforms Inc. (Facebook and Instagram) is recognized as an
            extremist organization; its activities are prohibited in Russia.
          </p>
        </div>
      </div>
    </footer>
  );
}

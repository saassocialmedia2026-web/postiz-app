import {
  FiBarChart2,
  FiCalendar,
  FiImage,
  FiLink,
  FiShare2,
  FiShield,
  FiUsers,
} from '@meronex/icons/fi';
import Link from 'next/link';
import { LandingFaq } from './landing-faq';
import { PublicSiteFooter } from './public-site-footer';
import { PublicSiteHeader } from './public-site-header';

const platforms = ['tiktok', 'instagram', 'facebook', 'x', 'linkedin'];

const features = [
  {
    icon: FiShare2,
    title: 'Multi-platform publishing',
    description:
      'Publish content to multiple social networks from a single dashboard.',
  },
  {
    icon: FiCalendar,
    title: 'Content scheduling',
    description: 'Plan weeks or months ahead with automated publishing.',
  },
  {
    icon: FiImage,
    title: 'Media management',
    description: 'Store and organize your photos and videos in one place.',
  },
  {
    icon: FiUsers,
    title: 'Team collaboration',
    description: 'Manage workflows and collaborate with team members.',
  },
  {
    icon: FiBarChart2,
    title: 'Analytics',
    description: 'Track engagement and monitor content performance.',
  },
  {
    icon: FiLink,
    title: 'API integrations',
    description: 'Connect your workflows and automate repetitive tasks.',
  },
];

const steps = [
  {
    title: 'Connect accounts',
    description:
      'Securely connect your social media profiles using official authentication.',
  },
  {
    title: 'Create content',
    description:
      'Write posts, upload media, and prepare your content calendar.',
  },
  {
    title: 'Schedule and publish',
    description:
      'Publish instantly or schedule posts for a future date and time.',
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#080b0d] text-white">
      <PublicSiteHeader />
      <main>
        <section className="mx-auto max-w-[1180px] px-5 pb-24 pt-20 text-center sm:px-8 sm:pb-28 sm:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-[#18d5c5]" />
            Social Media Scheduling Platform
          </div>
          <h1 className="mx-auto mt-8 max-w-[980px] text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
            Manage all your
            <br />
            <span className="text-[#49e5d8]">social media</span>
            <br />
            from one place
          </h1>
          <p className="mx-auto mt-7 max-w-[680px] text-lg leading-8 text-white/58 sm:text-xl">
            Connect your social accounts, schedule content, and publish across
            multiple platforms from a single dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/auth"
              className="w-full rounded-md bg-[#18d5c5] px-7 py-4 font-semibold text-[#04110f] transition-colors hover:bg-[#45e6d8] sm:w-auto"
            >
              Start Free
            </Link>
            <Link
              href="/#features"
              className="w-full rounded-md border border-white/15 px-7 py-4 font-medium text-white transition-colors hover:bg-white/[0.06] sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0c1012] px-5 py-10 sm:px-8">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Publish to the platforms you already use
          </h2>
          <ul className="mx-auto mt-8 flex max-w-[860px] flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14">
            {platforms.map((platform) => (
              <li
                key={platform}
                className="flex items-center gap-3 text-sm font-medium capitalize text-white/60"
              >
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-contain bg-center bg-no-repeat opacity-60 invert"
                  style={{
                    backgroundImage: `url(/logos/${platform}.svg)`,
                  }}
                />
                {platform === 'x' ? 'X' : platform}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="features"
          className="mx-auto max-w-[1180px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Everything you need to publish content
            </h2>
            <p className="mt-4 text-white/55">
              Built for creators, businesses, and agencies.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-md border border-white/10 bg-[#111619] p-7 transition-colors hover:border-[#18d5c5]/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#18d5c5] text-[#04110f]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/55">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-20 border-y border-white/10 bg-[#0c1012]"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 sm:py-28">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">
              How it works
            </h2>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-md border border-white/10 bg-[#111619] p-7"
                >
                  <div className="text-4xl font-semibold text-[#49e5d8]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/55">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-[820px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-28"
        >
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
          <LandingFaq />
        </section>

        <section className="border-y border-white/10 bg-[#0c1012]">
          <div className="mx-auto max-w-[760px] px-5 py-24 text-center sm:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-[#18d5c5]/35 bg-[#18d5c5]/10 text-[#49e5d8]">
              <FiShield className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Privacy and security
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/55">
              Postu only accesses accounts explicitly connected by users. You
              retain full control over every connected profile and can
              disconnect it at any time.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[980px] px-5 py-24 sm:px-8 sm:py-28">
          <div className="rounded-md border border-[#18d5c5]/25 bg-[#111619] px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to simplify social media management?
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-white/55">
              Schedule, publish, and manage content from one dashboard.
            </p>
            <Link
              href="/auth"
              className="mt-9 inline-block rounded-md bg-[#18d5c5] px-8 py-4 font-semibold text-[#04110f] transition-colors hover:bg-[#45e6d8]"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <PublicSiteFooter />
    </div>
  );
}

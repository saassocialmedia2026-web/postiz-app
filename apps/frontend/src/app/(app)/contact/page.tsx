import { FiMail, FiShield, FiTrash2 } from '@meronex/icons/fi';
import { Metadata } from 'next';
import { PublicSiteFooter } from '@gitroom/frontend/components/public-site/public-site-footer';
import { PublicSiteHeader } from '@gitroom/frontend/components/public-site/public-site-header';

export const metadata: Metadata = {
  title: 'Contact | Postu',
  description:
    'Contact Postu for support, privacy questions, and data deletion requests.',
};

const contacts = [
  {
    icon: FiMail,
    title: 'General and support',
    description:
      'Questions about the platform, partnerships, or API access for review.',
    href: 'mailto:hi@postu.io',
    action: 'hi@postu.io',
  },
  {
    icon: FiShield,
    title: 'Privacy',
    description:
      'Privacy questions or requests to access and correct your personal data.',
    href: 'mailto:hi@postu.io?subject=Privacy%20Request',
    action: 'Privacy request',
  },
  {
    icon: FiTrash2,
    title: 'Data deletion',
    description:
      'Request deletion of your account and data using the email associated with your account.',
    href: 'mailto:hi@postu.io?subject=Data%20Deletion%20Request',
    action: 'Data deletion request',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#080b0d] text-white">
      <PublicSiteHeader />
      <main className="mx-auto max-w-[1040px] px-5 py-20 sm:px-8 sm:py-24">
        <header className="text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">Contact us</h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-white/60">
            We are happy to help. Reach the Postu team directly at{' '}
            <a
              className="text-[#49e5d8] hover:text-[#7af0e6]"
              href="mailto:hi@postu.io"
            >
              hi@postu.io
            </a>
            .
          </p>
        </header>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <article
                key={contact.title}
                className="flex flex-col rounded-md border border-white/10 bg-[#111619] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#18d5c5] text-[#04110f]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{contact.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/55">
                  {contact.description}
                </p>
                <a
                  className="mt-5 text-sm font-medium text-[#49e5d8] hover:text-[#7af0e6]"
                  href={contact.href}
                >
                  {contact.action}
                </a>
              </article>
            );
          })}
        </div>

        <section className="mt-8 rounded-md border border-white/10 bg-[#111619] p-6 text-sm leading-7 text-white/60">
          <h2 className="font-semibold text-white">Business details</h2>
          <p className="mt-2">
            Postu.io, operated by Sole Proprietor Nikita Lomov
          </p>
          <p>Moscow, Russian Federation</p>
          <p>
            Email:{' '}
            <a className="text-[#49e5d8]" href="mailto:hi@postu.io">
              hi@postu.io
            </a>
          </p>
        </section>
      </main>
      <PublicSiteFooter />
    </div>
  );
}

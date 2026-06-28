'use client';

import { FiChevronDown } from '@meronex/icons/fi';
import { useState } from 'react';

const questions = [
  {
    question: 'Which social media platforms does Postu support?',
    answer:
      'Postu supports major social networks including TikTok, Instagram, Facebook, X, LinkedIn, YouTube, and more. Availability depends on each platform API and its approval requirements.',
  },
  {
    question: 'Can I schedule posts in advance?',
    answer:
      'Yes. Prepare your content, choose a date and time, and Postu will publish it automatically. You can also publish immediately.',
  },
  {
    question: 'Is my account data secure?',
    answer:
      'Postu connects through official platform authorization. It does not ask for or store your social network passwords, and you can disconnect an account at any time.',
  },
];

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 flex flex-col gap-3">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-md border border-white/10 bg-[#111619]"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex min-h-[68px] w-full items-center justify-between gap-4 px-5 text-left text-base font-semibold text-white sm:px-6"
              >
                {item.question}
                <FiChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-[#49e5d8] transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            <div className={isOpen ? 'block' : 'hidden'}>
              <p className="px-5 pb-6 leading-7 text-white/60 sm:px-6">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import { useState } from 'react';
import type { QA } from '@/content/faq';

export default function FaqAccordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-lg font-semibold text-navy">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-2xl text-gold-600 transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="leading-relaxed text-navy/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

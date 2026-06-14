import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsMarquee() {
  const t = useTranslations('reviews');
  const reviews = useReviews();
  const loop = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              {t('heading')}
            </h2>
            <div className="flex items-center gap-2 text-sm text-navy/60">
              <Stars />
              <span className="font-semibold text-navy">{t('ratingValue')}</span>
              <span>·</span>
              <GoogleMark className="text-sm" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee-pause relative">
        {/* weiche Ränder */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-sand-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-sand-50 to-transparent" />
        <div className="flex w-max animate-marquee gap-5 pb-12">
          {loop.map((r, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col rounded-xl border border-navy/10 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <GoogleMark className="text-sm" />
              </div>
              <p className="mt-4 leading-relaxed text-navy/75">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-navy/10 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-serif text-sand-50">
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{r.name}</p>
                  <p className="text-xs text-navy/50">{r.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

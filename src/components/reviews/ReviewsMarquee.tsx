import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsMarquee() {
  const t = useTranslations('reviews');
  const reviews = useReviews();
  const loop = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t('heading')}
            </h2>
            <div className="flex items-center gap-2 text-sm text-black/60">
              <Stars />
              <span className="font-semibold text-white">{t('ratingValue')}</span>
              <span>·</span>
              <GoogleMark className="text-sm" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee-pause relative">
        {/* weiche Ränder */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#728690] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#728690] to-transparent" />
        <div className="flex w-max animate-marquee gap-5 pb-12">
          {loop.map((r, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col rounded-xl border border-black/10 bg-[#728690] p-6"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <GoogleMark className="text-sm" />
              </div>
              <p className="mt-4 leading-relaxed text-black/75">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-black/10 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-serif text-white">
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-black/50">{r.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

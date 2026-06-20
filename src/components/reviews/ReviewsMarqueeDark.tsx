import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsMarqueeDark() {
  const t = useTranslations('reviews');
  const reviews = useReviews();
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-navy-900 text-sand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 0%, rgba(114,134,144,0.16) 0%, transparent 60%)',
        }}
      />

      <div className="container-content relative pt-24 text-center md:pt-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-400">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>

          {/* 4,9 + 127 zusammen */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="font-serif text-5xl font-semibold text-gold-400">
              {t('ratingValue')}
            </span>
            <div className="text-left">
              <Stars className="text-gold-400" />
              <p className="mt-1 text-sm text-sand-100/60">
                {t('ratingCount')} · <GoogleMark className="text-sm" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Endlos-Laufband */}
      <div className="marquee-pause relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((r, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col rounded-xl border border-sand-100/12 bg-sand-100/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Stars className="text-gold-400" />
                <GoogleMark className="text-sm" />
              </div>
              <p className="mt-4 leading-relaxed text-sand-100/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-sand-100/12 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-serif text-navy-900">
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-sand-100/50">{r.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Hübscher Google-Button */}
      <div className="container-content relative pb-24 text-center md:pb-28">
        <Reveal>
          <a
            href="https://www.google.com/search?q=Hoffmann+Vogel+Rechtsanw%C3%A4lte+M%C3%BCnchen"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-14 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 shadow-xl shadow-navy-900/40 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <GoogleMark className="text-base" />
            <span className="h-5 w-px bg-navy/15" />
            <span className="font-serif text-lg font-semibold text-navy">
              {t('ratingValue')}
            </span>
            <Stars className="text-gold" />
            <span className="hidden text-sm text-navy/60 sm:inline">
              {t('ratingCount')}
            </span>
            <span className="text-gold-600 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <p className="mt-5 text-xs text-sand-100/40">{t('placeholder')}</p>
        </Reveal>
      </div>
    </section>
  );
}

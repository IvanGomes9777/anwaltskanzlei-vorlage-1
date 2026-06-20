import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsMarqueeDark() {
  const t = useTranslations('reviews');
  const reviews = useReviews();
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-[#728690] text-black">
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
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>

          {/* 4,9 + 127 zusammen */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="font-serif text-5xl font-semibold text-black">
              {t('ratingValue')}
            </span>
            <div className="text-left">
              <Stars className="text-black" />
              <p className="mt-1 text-sm text-black/60">
                {t('ratingCount')} · <GoogleMark className="text-sm" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Endlos-Laufband */}
      <div className="marquee-pause relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#728690] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#728690] to-transparent" />
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((r, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col rounded-xl border border-black/12 bg-[#728690]/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Stars className="text-black" />
                <GoogleMark className="text-sm" />
              </div>
              <p className="mt-4 leading-relaxed text-black/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-black/12 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-serif text-black">
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-black/50">{r.meta}</p>
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
            className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[#728690] px-7 py-4 shadow-xl shadow-navy-900/40 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <GoogleMark className="text-base" />
            <span className="h-5 w-px bg-black/15" />
            <span className="font-serif text-lg font-semibold text-white">
              {t('ratingValue')}
            </span>
            <Stars className="text-black" />
            <span className="hidden text-sm text-black/60 sm:inline">
              {t('ratingCount')}
            </span>
            <span className="text-black transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <p className="mt-5 text-xs text-black/40">{t('placeholder')}</p>
        </Reveal>
      </div>
    </section>
  );
}

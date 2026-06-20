import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsDark() {
  const t = useTranslations('reviews');
  const reviews = useReviews();

  return (
    <section className="relative overflow-hidden bg-[#728690] text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 0%, rgba(114,134,144,0.16) 0%, transparent 60%)',
        }}
      />
      <div className="container-content relative py-24 md:py-28">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              {t('heading')}
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-black/70">
              <span className="font-serif text-2xl font-semibold text-black">
                {t('ratingValue')}
              </span>
              <Stars className="text-black" />
              <span>·</span>
              <GoogleMark className="text-sm" />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-black/12 bg-[#728690]/[0.04] p-6 backdrop-blur-sm">
                <Stars className="text-black" />
                <p className="mt-4 flex-1 leading-relaxed text-black/80">“{r.text}”</p>
                <div className="mt-6 flex items-center gap-3 border-t border-black/12 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-serif text-black">
                    {r.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-black/50">{r.meta}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              <GoogleMark className="text-sm" />
              <span>·</span>
              {t('viewAll')}
            </a>
            <p className="mt-5 text-xs text-black/40">{t('placeholder')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

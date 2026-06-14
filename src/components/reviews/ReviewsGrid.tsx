import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsGrid() {
  const t = useTranslations('reviews');
  const reviews = useReviews().slice(0, 3);

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
                {t('eyebrow')}
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
                {t('heading')}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-semibold text-navy">
                {t('ratingValue')}
              </span>
              <div>
                <Stars />
                <p className="mt-1 text-xs text-navy/55">
                  {t('ratingCount')} · <GoogleMark className="text-xs" />
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6">
                <div className="flex items-center justify-between">
                  <Stars />
                  <GoogleMark className="text-sm" />
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-navy/75">“{r.text}”</p>
                <div className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-sand-50">
                    {r.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{r.name}</p>
                    <p className="text-xs text-navy/50">{r.meta}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-navy/40">{t('placeholder')}</p>
      </div>
    </section>
  );
}

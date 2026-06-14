import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsAggregate() {
  const t = useTranslations('reviews');
  const reviews = useReviews().slice(0, 4);

  return (
    <section className="bg-sand-50">
      <div className="container-content grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <Reveal>
          <div className="md:sticky md:top-28 md:h-fit">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              {t('heading')}
            </h2>
            <div className="mt-8 rounded-2xl border border-navy/10 bg-white p-8 text-center">
              <p className="font-serif text-6xl font-semibold text-navy">
                {t('ratingValue')}
              </p>
              <div className="mt-3 flex justify-center">
                <Stars />
              </div>
              <p className="mt-3 text-sm text-navy/55">{t('ratingCount')}</p>
              <div className="mt-4 border-t border-navy/10 pt-4">
                <GoogleMark />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <article className="rounded-xl border border-navy/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-sand-50">
                    {r.initial}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-navy">{r.name}</p>
                    <p className="text-xs text-navy/50">{r.meta}</p>
                  </div>
                  <Stars />
                </div>
                <p className="mt-4 leading-relaxed text-navy/75">“{r.text}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

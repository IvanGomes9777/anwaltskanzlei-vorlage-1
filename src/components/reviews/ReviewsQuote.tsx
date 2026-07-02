import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { Stars, GoogleMark, useReviews } from './parts';

export default function ReviewsQuote() {
  const t = useTranslations('reviews');
  const featured = useReviews()[1];

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 text-center md:py-32">
        <Reveal>
          <div className="flex justify-center">
            <Stars className="text-black [&_svg]:h-6 [&_svg]:w-6" />
          </div>
          <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-3xl font-medium leading-snug text-white md:text-4xl">
            “{featured.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black font-serif text-white">
              {featured.initial}
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{featured.name}</p>
              <p className="text-xs text-black/50">{featured.meta}</p>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-3 border-t border-black/12 pt-6 text-sm text-black/60">
            <span className="font-serif text-2xl font-semibold text-white">
              {t('ratingValue')}
            </span>
            <span>{t('ratingCount')}</span>
            <GoogleMark className="text-sm" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

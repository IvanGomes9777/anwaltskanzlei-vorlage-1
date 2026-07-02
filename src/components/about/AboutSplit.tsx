import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function AboutSplit() {
  const t = useTranslations('about');

  return (
    <section className="bg-[#728690]">
      <div className="container-content grid items-center gap-12 py-24 md:grid-cols-2 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/75">{t('lead')}</p>
          <p className="mt-4 leading-relaxed text-black/65">{t('p1')}</p>
          <p className="mt-4 leading-relaxed text-black/65">{t('p2')}</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            {t('cta')}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/hero/about-office.webp"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute left-0 top-8 h-16 w-1 bg-white" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

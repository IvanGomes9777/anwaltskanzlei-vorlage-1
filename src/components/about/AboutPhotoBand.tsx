import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function AboutPhotoBand() {
  const t = useTranslations('about');

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/hero/about-office.webp"
        alt={t('imageAlt')}
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/92 via-navy-900/72 to-navy-900/30" />

      <div className="container-content flex min-h-[520px] items-center py-24 text-black">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-black">
            <span className="h-px w-8 bg-white" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/80">{t('lead')}</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            {t('cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

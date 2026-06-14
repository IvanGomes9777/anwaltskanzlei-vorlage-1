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

      <div className="container-content flex min-h-[520px] items-center py-24 text-sand-100">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-sand-100/80">{t('lead')}</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            {t('cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

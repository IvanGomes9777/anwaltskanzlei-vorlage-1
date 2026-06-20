import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { press } from '@/content/press';

export default function PressList() {
  const t = useTranslations('press');

  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-black">
            <span className="h-px w-8 bg-white" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-black/70">{t('intro')}</p>
        </Reveal>

        <div className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {press.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-black/15 py-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.08em] text-black/60">
                    {item.source} · {item.date}
                  </span>
                  <span className="text-black transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-white transition-opacity group-hover:opacity-80">
                  {item.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-black/40">{t('placeholder')}</p>
      </div>
    </section>
  );
}

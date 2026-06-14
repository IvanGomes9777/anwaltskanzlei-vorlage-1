import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactTiles() {
  const t = useTranslations('contact');

  const tiles = [
    { t: t('addressTitle'), v: `${t('address1')}, ${t('address2')}` },
    { t: t('phoneTitle'), v: t('phone') },
    { t: t('emailTitle'), v: t('email') },
    { t: t('hoursTitle'), v: t('hours') },
  ];

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              {t('heading')}
            </h2>
            <p className="mt-5 text-lg text-navy/65">{t('intro')}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.07}>
              <div className="h-full rounded-xl border border-navy/10 bg-white p-6">
                <p className="text-xs uppercase tracking-wide text-gold-600">{it.t}</p>
                <p className="mt-2 text-navy/80">{it.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

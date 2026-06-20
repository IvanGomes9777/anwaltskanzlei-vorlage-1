import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactDark() {
  const t = useTranslations('contact');

  const info = [
    { t: t('addressTitle'), v: `${t('address1')}, ${t('address2')}` },
    { t: t('phoneTitle'), v: t('phone') },
    { t: t('emailTitle'), v: t('email') },
    { t: t('hoursTitle'), v: t('hours') },
  ];

  return (
    <section className="relative overflow-hidden bg-navy-900 text-sand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(55% 55% at 90% 0%, rgba(114,134,144,0.16) 0%, transparent 60%)',
        }}
      />
      <div className="container-content relative grid gap-14 py-24 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-md text-lg text-sand-100/65">{t('intro')}</p>

          <dl className="mt-10 space-y-5 border-t border-sand-100/15 pt-8">
            {info.map((it) => (
              <div key={it.t}>
                <dt className="text-xs uppercase tracking-wide text-gold-400">{it.t}</dt>
                <dd className="mt-1 text-sand-100/80">{it.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          <ContactForm dark />
        </Reveal>
      </div>
    </section>
  );
}

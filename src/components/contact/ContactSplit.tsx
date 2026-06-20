import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactSplit() {
  const t = useTranslations('contact');

  const info = [
    { t: t('addressTitle'), v: `${t('address1')}, ${t('address2')}` },
    { t: t('phoneTitle'), v: t('phone') },
    { t: t('emailTitle'), v: t('email') },
    { t: t('hoursTitle'), v: t('hours') },
  ];

  return (
    <section className="bg-[#728690]">
      <div className="container-content grid gap-14 py-24 md:grid-cols-2 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-5 max-w-md text-lg text-black/65">{t('intro')}</p>

          <dl className="mt-10 space-y-5 border-t border-black/12 pt-8">
            {info.map((it) => (
              <div key={it.t}>
                <dt className="text-xs uppercase tracking-wide text-black">{it.t}</dt>
                <dd className="mt-1 text-black/80">{it.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

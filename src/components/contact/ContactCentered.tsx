import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactCentered() {
  const t = useTranslations('contact');

  const info = [
    { t: t('phoneTitle'), v: t('phone') },
    { t: t('emailTitle'), v: t('email') },
    { t: t('addressTitle'), v: `${t('address1')}, ${t('address2')}` },
  ];

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-black">
              {t('eyebrow')}
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t('heading')}
            </h2>
            <p className="mt-5 text-lg text-black/65">{t('intro')}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-black/10 bg-[#728690] p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-12 gap-y-4 border-t border-black/12 pt-8 text-center">
            {info.map((it) => (
              <div key={it.t}>
                <p className="text-xs uppercase tracking-wide text-black">{it.t}</p>
                <p className="mt-1 text-sm text-black/75">{it.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

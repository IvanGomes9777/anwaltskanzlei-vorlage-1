import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactMap() {
  const t = useTranslations('contact');

  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-black md:text-5xl">
            {t('heading')}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <iframe
                  title={t('mapLabel')}
                  className="h-[320px] w-full md:h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=S%C3%BCdstra%C3%9Fe%2011%2C%2048153%20M%C3%BCnster&output=embed"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-700">
                    {t('addressTitle')}
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    {t('address1')}
                    <br />
                    {t('address2')}
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gray-700">
                    {t('emailTitle')}
                  </p>
                  <a
                    href={`mailto:${t('email')}`}
                    className="mt-1 block break-all text-sm text-white/80 underline-offset-2 hover:underline"
                  >
                    {t('email')}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-700">
                    {t('phoneTitle')}
                  </p>
                  <a
                    href={`tel:${t('phone').replace(/\s/g, '')}`}
                    className="mt-1 block text-sm text-white/80 underline-offset-2 hover:underline"
                  >
                    {t('phone')}
                  </a>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gray-700">
                    {t('faxTitle')}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{t('fax')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

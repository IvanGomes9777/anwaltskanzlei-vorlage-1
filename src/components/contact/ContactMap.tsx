import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';

export default function ContactMap() {
  const t = useTranslations('contact');

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {t('heading')}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  title={t('mapLabel')}
                  className="h-[320px] w-full md:h-[380px]"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=11.5760%2C48.1380%2C11.5880%2C48.1430&layer=mapnik&marker=48.1405%2C11.5820"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gold-600">
                    {t('addressTitle')}
                  </p>
                  <p className="mt-1 text-sm text-navy/75">
                    {t('address1')}
                    <br />
                    {t('address2')}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gold-600">
                    {t('phoneTitle')}
                  </p>
                  <p className="mt-1 text-sm text-navy/75">{t('phone')}</p>
                  <p className="mt-3 text-xs uppercase tracking-wide text-gold-600">
                    {t('hoursTitle')}
                  </p>
                  <p className="mt-1 text-sm text-navy/75">{t('hours')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

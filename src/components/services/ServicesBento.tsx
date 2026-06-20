import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function ServicesBento() {
  const a = useTranslations('areas');
  const s = useTranslations('services');

  return (
    <section className="bg-sand-50">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
            {s('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {s('heading')}
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-3">
          {/* Feature-Kachel (Arbeitsrecht), groß auf Navy */}
          <Reveal className="md:col-span-2 md:row-span-2" delay={0.05}>
            <article className="flex h-full flex-col justify-between rounded-2xl bg-navy p-8 text-sand-100">
              <span className="font-serif text-sm text-gold-400">01</span>
              <div>
                <h3 className="font-serif text-3xl font-semibold">{a('a1')}</h3>
                <p className="mt-4 max-w-md text-sand-100/75">{s('d1')}</p>
                <p className="mt-6 text-xs uppercase tracking-wide text-sand-100/45">
                  {s('t1')}
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-7">
              <span className="font-serif text-sm text-gold-600">02</span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy">{a('a2')}</h3>
                <p className="mt-2 text-sm text-navy/65">{s('t2')}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.18}>
            <article className="flex h-full flex-col justify-between rounded-2xl bg-gold p-7 text-navy">
              <span className="font-serif text-sm text-navy/70">03</span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{a('a3')}</h3>
                <p className="mt-2 text-sm text-navy/75">{s('t3')}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function ServicesCards() {
  const a = useTranslations('areas');
  const s = useTranslations('services');

  const items = [
    { n: '01', title: a('a1'), desc: s('d1'), tags: s('t1') },
    { n: '02', title: a('a2'), desc: s('d2'), tags: s('t2') },
    { n: '03', title: a('a3'), desc: s('d3'), tags: s('t3') },
  ];

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
          <p className="mt-5 max-w-xl text-lg text-navy/65">{s('intro')}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-24px_rgba(15,27,45,0.4)]">
                <span className="absolute left-0 top-7 h-8 w-px bg-gold transition-all group-hover:h-12" />
                <span className="font-serif text-sm text-gold-600">{it.n}</span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {it.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                  {it.desc}
                </p>
                <p className="mt-5 text-xs uppercase tracking-wide text-navy/40">
                  {it.tags}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

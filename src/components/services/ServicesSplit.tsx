import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function ServicesSplit() {
  const a = useTranslations('areas');
  const s = useTranslations('services');

  const items = [
    { n: '01', title: a('a1'), desc: s('d1') },
    { n: '02', title: a('a2'), desc: s('d2') },
    { n: '03', title: a('a3'), desc: s('d3') },
    { n: '04', title: a('a4'), desc: s('d4') },
  ];

  return (
    <section className="bg-sand-50">
      <div className="container-content grid gap-12 py-24 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        {/* Sticky-Überschrift */}
        <div className="md:sticky md:top-28 md:h-fit">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold-600">
            {s('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {s('heading')}
          </h2>
          <p className="mt-5 max-w-sm text-lg text-navy/65">{s('intro')}</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md bg-navy px-7 py-3.5 text-sm font-medium text-sand-50 transition-colors hover:bg-navy-700"
          >
            {s('cta')}
          </a>
        </div>

        {/* Blöcke */}
        <div>
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <div className="border-t border-navy/12 py-8 first:border-t-0 first:pt-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-gold-600">{it.n}</span>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {it.title}
                  </h3>
                </div>
                <p className="mt-3 pl-8 text-base leading-relaxed text-navy/65">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

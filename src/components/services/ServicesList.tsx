import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function ServicesList() {
  const a = useTranslations('areas');
  const s = useTranslations('services');

  const items = [
    { n: '01', title: a('a1'), desc: s('d1') },
    { n: '02', title: a('a2'), desc: s('d2') },
    { n: '03', title: a('a3'), desc: s('d3') },
  ];

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {s('heading')}
            </h2>
            <p className="max-w-sm text-base text-black/60">{s('intro')}</p>
          </div>
        </Reveal>

        <div>
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.06}>
              <div className="group grid grid-cols-1 items-baseline gap-4 border-b border-black/12 py-8 md:grid-cols-[auto_1fr_1.4fr] md:gap-10">
                <span className="font-serif text-2xl text-black">{it.n}</span>
                <h3 className="font-serif text-2xl font-medium text-white transition-colors group-hover:text-black md:text-3xl">
                  {it.title}
                </h3>
                <p className="text-base leading-relaxed text-black/65">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

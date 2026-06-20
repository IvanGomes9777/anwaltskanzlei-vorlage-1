import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal';

export default function ServicesDark() {
  const a = useTranslations('areas');
  const s = useTranslations('services');

  const items = [
    { n: '01', title: a('a1'), desc: s('d1'), tags: s('t1'), slug: 'arbeitsrecht' },
    { n: '02', title: a('a2'), desc: s('d2'), tags: s('t2'), slug: 'familienrecht' },
    { n: '03', title: a('a3'), desc: s('d3'), tags: s('t3'), slug: 'wirtschaftsrecht' },
    { n: '04', title: a('a4'), desc: s('d4'), tags: s('t4'), slug: 'strafrecht' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#728690] text-black">
      <div className="container-content relative py-24 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-white">
            <span className="h-px w-8 bg-white" />
            {s('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-black md:text-5xl">
            {s('heading')}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-black/70">{s('intro')}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <Link
                href={`/leistungen/${it.slug}`}
                className="group block h-full bg-[#728690] p-8 transition-colors hover:bg-[#5d6e77]"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-white">{it.title}</h3>
                  <span className="font-serif text-sm text-black/60">{it.n}</span>
                </div>
                <p className="mt-4 text-black/80">{it.desc}</p>
                <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wide text-black/60">
                  {it.tags}
                  <span className="text-black transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

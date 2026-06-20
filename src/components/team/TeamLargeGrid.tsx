import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { useMembers } from './TeamCards';

export default function TeamLargeGrid() {
  const t = useTranslations('team');
  const members = useMembers();

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-black">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t('heading')}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-black/12 pt-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm text-black/55">{m.area}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-black">
                    {m.role}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

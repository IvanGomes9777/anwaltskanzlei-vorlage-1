import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';
import { useMembers } from './TeamCards';

export default function TeamList() {
  const t = useTranslations('team');
  const members = useMembers();

  return (
    <section className="bg-[#728690]">
      <div className="container-content py-24 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t('heading')}
            </h2>
            <p className="max-w-sm text-base text-black/60">{t('intro')}</p>
          </div>
        </Reveal>

        <div>
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group flex items-center gap-6 border-b border-black/12 py-6">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image src={m.img} alt={m.name} fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white transition-colors group-hover:text-black">
                      {m.name}
                    </h3>
                    <p className="text-sm text-black/55">{m.role}</p>
                  </div>
                  <p className="text-sm font-medium text-black/70">{m.area}</p>
                </div>
                <span className="text-black/30 transition-all group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

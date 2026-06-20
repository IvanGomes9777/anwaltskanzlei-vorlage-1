import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { practices } from '@/content/practice';
import MobileNav from './MobileNav';

export default function Header() {
  const t = useTranslations();

  const nav = [
    { href: '/#kanzlei', label: t('nav.firm') },
    { href: '/#team', label: t('nav.team') },
    { href: '/#presse', label: t('nav.press') },
    { href: '/kosten', label: t('nav.costs') },
    { href: '/#kontakt', label: t('nav.contact') },
  ];

  return (
    <header className="border-b border-black/10 bg-[#728690] backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="block font-serif text-xl font-semibold text-black">
            {t('brand.name')}
          </span>
          <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-black/70">
            {t('brand.suffix')}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-black/80 md:flex">
          {/* Rechtsgebiete – Dropdown */}
          <div className="group relative">
            <Link
              href="/#leistungen"
              className="inline-flex items-center gap-1 transition-colors hover:text-black"
            >
              Rechtsgebiete
              <span aria-hidden className="text-[10px] leading-none">▾</span>
            </Link>
            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[280px] rounded-xl border border-black/10 bg-white p-2 shadow-xl shadow-black/20">
                {practices.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/leistungen/${p.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-black/80 transition-colors hover:bg-[#728690]/10 hover:text-[#728690]"
                  >
                    {p.de.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

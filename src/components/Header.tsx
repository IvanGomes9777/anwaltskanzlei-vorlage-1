import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import MobileNav from './MobileNav';

export default function Header() {
  const t = useTranslations();

  const nav = [
    { href: '/#leistungen', label: t('nav.services') },
    { href: '/#kanzlei', label: t('nav.firm') },
    { href: '/#team', label: t('nav.team') },
    { href: '/#presse', label: t('nav.press') },
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

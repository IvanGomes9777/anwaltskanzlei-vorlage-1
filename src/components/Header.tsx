import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();

  const nav = [
    { href: '/', label: t('nav.home') },
    { href: '/', label: t('nav.services') },
    { href: '/', label: t('nav.firm') },
    { href: '/', label: t('nav.team') },
    { href: '/', label: t('nav.contact') },
  ];

  return (
    <header className="border-b border-navy/10 bg-sand-50/80 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="block font-serif text-xl font-semibold text-navy">
            {t('brand.name')}
          </span>
          <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-gold-600">
            {t('brand.suffix')}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-navy/80 md:flex">
          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}

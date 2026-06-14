import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-sand-100">
      <div className="container-content flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold">{t('brand.name')}</p>
          <p className="text-sm text-sand-100/60">{t('brand.suffix')}</p>
          <p className="mt-4 max-w-sm text-xs text-sand-100/40">
            {t('footer.placeholder')}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-sand-100/70 transition-colors hover:text-gold"
            >
              {t('footer.imprint')}
            </Link>
            <Link
              href="/datenschutz"
              className="text-sand-100/70 transition-colors hover:text-gold"
            >
              {t('footer.privacy')}
            </Link>
          </div>
          <p className="text-xs text-sand-100/40">
            © {year} {t('brand.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

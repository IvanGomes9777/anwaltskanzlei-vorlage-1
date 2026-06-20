import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/10 bg-[#728690] text-black">
      <div className="container-content flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold text-white">{t('brand.name')}</p>
          <p className="text-sm text-black/60">{t('brand.suffix')}</p>
          <p className="mt-4 max-w-sm text-xs text-black/40">
            {t('footer.placeholder')}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <Link href="/faq" className="text-black/70 transition-colors hover:text-black">
              {t('footer.faq')}
            </Link>
            <Link href="/karriere" className="text-black/70 transition-colors hover:text-black">
              {t('footer.career')}
            </Link>
            <Link
              href="/impressum"
              className="text-black/70 transition-colors hover:text-black"
            >
              {t('footer.imprint')}
            </Link>
            <Link
              href="/datenschutz"
              className="text-black/70 transition-colors hover:text-black"
            >
              {t('footer.privacy')}
            </Link>
          </div>
          <p className="text-xs text-black/40">
            © {year} {t('brand.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

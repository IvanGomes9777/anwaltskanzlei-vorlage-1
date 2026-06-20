import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import { faq } from '@/content/faq';

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const items = faq.de;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-[#728690]">
        <div className="container-content max-w-3xl py-20 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-black">
            Häufige Fragen
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
            Antworten auf Ihre Fragen
          </h1>
          <p className="mt-5 text-lg text-black/65">
            Die häufigsten Fragen rund um die Zusammenarbeit mit uns.
          </p>

          <div className="mt-12">
            <FaqAccordion items={items} />
          </div>

          <div className="mt-12 rounded-2xl border border-black/10 bg-[#728690] p-7 text-center">
            <p className="text-black/70">
              Ihre Frage war nicht dabei?
            </p>
            <Link
              href="/#kontakt"
              className="mt-4 inline-block rounded-md bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

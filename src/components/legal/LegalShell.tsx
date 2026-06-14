import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-content max-w-3xl py-20 md:py-24">
          <h1 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-navy/45">{updated}</p>
          <div className="hairline-gold mt-6" />
          <div className="legal-prose mt-10">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

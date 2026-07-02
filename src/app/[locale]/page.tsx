import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroFinal from '@/components/heroes/HeroFinal';
import ServicesDark from '@/components/services/ServicesDark';
import AboutFinal from '@/components/about/AboutFinal';
import TeamCards from '@/components/team/TeamCards';
import PressList from '@/components/press/PressList';
import ContactMap from '@/components/contact/ContactMap';

const HOME_TITLE = 'Lübbersmann Rechtsanwälte – Strafverteidigung in Münster';

export function generateMetadata(): Metadata {
  return {
    ...pageMetadata({
      path: '',
      title: HOME_TITLE,
      description:
        'Fachanwalt für Strafrecht in Münster – Verteidigung im Medizin-, Wirtschafts- und Steuerstrafrecht, diskret und bundesweit.',
    }),
    // Startseite: voller Titel ohne Template-Suffix
    title: { absolute: HOME_TITLE },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroFinal />
        <div id="leistungen" className="scroll-mt-20">
          <ServicesDark />
        </div>
        <div id="kanzlei" className="scroll-mt-20">
          <AboutFinal />
        </div>
        <div id="team" className="scroll-mt-20">
          <TeamCards />
        </div>
        <div id="presse" className="scroll-mt-20">
          <PressList />
        </div>
        <div id="kontakt" className="scroll-mt-20">
          <ContactMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}

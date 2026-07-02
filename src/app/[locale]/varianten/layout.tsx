import type { Metadata } from 'next';

// Die Design-Varianten sind interne Demoseiten — nicht indexieren.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function VariantenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

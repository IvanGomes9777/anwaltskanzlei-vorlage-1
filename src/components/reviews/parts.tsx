import { useTranslations } from 'next-intl';

export function Stars({ className = 'text-gold' }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleMark({ className = '' }: { className?: string }) {
  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335'];
  return (
    <span className={`font-sans font-semibold tracking-tight ${className}`} aria-label="Google">
      {'Google'.split('').map((c, i) => (
        <span key={i} style={{ color: colors[i] }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export function useReviews() {
  const t = useTranslations('reviews');
  return [1, 2, 3, 4, 5, 6].map((n) => ({
    name: t(`r${n}name`),
    meta: t(`r${n}meta`),
    text: t(`r${n}text`),
    initial: t(`r${n}name`).charAt(0),
  }));
}

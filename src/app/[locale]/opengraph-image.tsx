import { ImageResponse } from 'next/og';

// OG-Image im Kanzlei-Design. Wird beim Build statisch erzeugt und gilt für
// alle Unterseiten, solange diese kein eigenes opengraph-image definieren.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lübbersmann Rechtsanwälte – Strafverteidigung in Münster';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#728690',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#ffffff' }} />
          <div
            style={{
              fontSize: '26px',
              letterSpacing: '8px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Strafverteidigung in Münster
          </div>
        </div>
        <div style={{ marginTop: '36px', fontSize: '96px', fontWeight: 600 }}>
          Lübbersmann
        </div>
        <div
          style={{
            marginTop: '8px',
            fontSize: '44px',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          Rechtsanwälte
        </div>
        <div
          style={{
            marginTop: '32px',
            fontSize: '32px',
            color: 'rgba(0,0,0,0.55)',
          }}
        >
          Strafverteidigung mit Weitblick.
        </div>
      </div>
    ),
    size
  );
}

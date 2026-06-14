'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);

  const labelCls = dark ? 'text-sand-100/70' : 'text-navy/60';
  const inputCls = dark
    ? 'border-sand-100/20 bg-sand-100/[0.04] text-sand-100 placeholder:text-sand-100/30 focus:border-gold-400'
    : 'border-navy/15 bg-white text-navy placeholder:text-navy/30 focus:border-gold';
  const noteCls = dark ? 'text-sand-100/45' : 'text-navy/45';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`text-xs uppercase tracking-wide ${labelCls}`}>
            {t('nameLabel')}
          </span>
          <input
            type="text"
            required
            className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
          />
        </label>
        <label className="block">
          <span className={`text-xs uppercase tracking-wide ${labelCls}`}>
            {t('emailLabel')}
          </span>
          <input
            type="email"
            required
            className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
          />
        </label>
      </div>

      <label className="block">
        <span className={`text-xs uppercase tracking-wide ${labelCls}`}>
          {t('phoneLabel')}
        </span>
        <input
          type="tel"
          className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
        />
      </label>

      <label className="block">
        <span className={`text-xs uppercase tracking-wide ${labelCls}`}>
          {t('messageLabel')}
        </span>
        <textarea
          rows={4}
          required
          className={`mt-1.5 w-full resize-none rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
        />
      </label>

      <label className={`flex items-start gap-3 text-sm ${dark ? 'text-sand-100/70' : 'text-navy/65'}`}>
        <input type="checkbox" required className="mt-1 accent-gold" />
        <span>{t('consent')}</span>
      </label>

      <p className={`text-xs leading-relaxed ${noteCls}`}>{t('confidential')}</p>

      <button
        type="submit"
        className={`rounded-md px-7 py-3.5 text-sm font-semibold transition-colors ${
          dark
            ? 'bg-gold text-navy-900 hover:bg-gold-400'
            : 'bg-navy text-sand-50 hover:bg-navy-700'
        }`}
      >
        {t('submit')}
      </button>

      {sent && (
        <p className={`text-sm font-medium ${dark ? 'text-gold-400' : 'text-gold-600'}`}>
          {t('demoNote')}
        </p>
      )}
    </form>
  );
}

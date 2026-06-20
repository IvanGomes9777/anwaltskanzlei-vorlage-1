'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

type Status = 'idle' | 'loading' | 'sent' | 'error';

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('contact');
  const a = useTranslations('areas');
  const locale = useLocale();
  const [status, setStatus] = useState<Status>('idle');

  const areas = [
    { slug: 'medizinstrafrecht', label: a('a1') },
    { slug: 'wirtschaftsstrafrecht', label: a('a2') },
    { slug: 'steuerstrafrecht', label: a('a3') },
  ];

  const labelCls = dark ? 'text-black/70' : 'text-black/60';
  const inputCls = dark
    ? 'border-black/20 bg-[#728690]/[0.04] text-black placeholder:text-black/30 focus:border-white'
    : 'border-black/20 bg-white text-black placeholder:text-black/40 focus:border-black';
  const noteCls = dark ? 'text-black/45' : 'text-black/45';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          area: data.get('area'),
          message: data.get('message'),
          consent: data.get('consent') === 'on',
          company: data.get('company'), // Honeypot
          locale,
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div
        className={`rounded-xl border p-8 text-center ${
          dark ? 'border-black/15 bg-[#728690]/[0.04] text-black' : 'border-black/10 bg-[#728690] text-white'
        }`}
      >
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black">
          ✓
        </span>
        <p className="font-serif text-lg font-semibold">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`text-xs uppercase tracking-wide ${labelCls}`}>{t('nameLabel')}</span>
          <input
            name="name"
            type="text"
            required
            className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
          />
        </label>
        <label className="block">
          <span className={`text-xs uppercase tracking-wide ${labelCls}`}>{t('emailLabel')}</span>
          <input
            name="email"
            type="email"
            required
            className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
          />
        </label>
      </div>

      <label className="block">
        <span className={`text-xs uppercase tracking-wide ${labelCls}`}>{t('phoneLabel')}</span>
        <input
          name="phone"
          type="tel"
          className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
        />
      </label>

      <label className="block">
        <span className={`text-xs uppercase tracking-wide ${labelCls}`}>{t('areaLabel')}</span>
        <select
          name="area"
          required
          defaultValue=""
          className={`mt-1.5 w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
        >
          <option value="" disabled>
            {t('areaPlaceholder')}
          </option>
          {areas.map((area) => (
            <option key={area.slug} value={area.slug} className="text-black">
              {area.label}
            </option>
          ))}
          <option value="other" className="text-black">
            {t('areaOther')}
          </option>
        </select>
      </label>

      <label className="block">
        <span className={`text-xs uppercase tracking-wide ${labelCls}`}>{t('messageLabel')}</span>
        <textarea
          name="message"
          rows={4}
          required
          className={`mt-1.5 w-full resize-none rounded-md border px-4 py-3 text-sm outline-none transition-colors ${inputCls}`}
        />
      </label>

      {/* Honeypot – für Menschen unsichtbar */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <label className={`flex items-start gap-3 text-sm ${dark ? 'text-black/70' : 'text-black/65'}`}>
        <input type="checkbox" name="consent" required className="mt-1 accent-black" />
        <span>{t('consent')}</span>
      </label>

      <p className={`text-xs leading-relaxed ${noteCls}`}>{t('confidential')}</p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`rounded-md px-7 py-3.5 text-sm font-semibold transition-colors disabled:opacity-60 ${
          dark ? 'bg-white text-black hover:bg-white' : 'bg-black text-white hover:bg-black'
        }`}
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </button>

      {status === 'error' && (
        <p className="text-sm font-medium text-red-600">{t('error')}</p>
      )}
    </form>
  );
}

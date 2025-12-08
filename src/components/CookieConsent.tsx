import React, { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
  timestamp: string;
  version: string;
};

const STORAGE_KEY = "cookieConsentDigitilio";
const CONSENT_VERSION = "2025-11-13";

function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: Omit<Consent, "timestamp">) {
  const payload: Consent = { ...consent, timestamp: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored || stored.version !== CONSENT_VERSION) setOpen(true);
  }, []);

 const acceptAll = () => {
  // 1. Consent Mode
  window.gtag?.('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  });

  // 2. Zapis w localStorage
  saveConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    ad_storage: true,
    ad_user_data: true,
    ad_personalization: true,
    version: CONSENT_VERSION
  });

  // 3. Event do GTM → odpala tag GA4 Event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cookie_consent_submitted",
    consent_action: "accept_all",
    consent_analytics: "granted",
    consent_marketing: "granted",
    consent_ad_storage: "granted",
    consent_ad_user_data: "granted",
    consent_ad_personalization: "granted"
  });

  setOpen(false);
};

const saveChoices = () => {
  const adGranted = marketing;

  // 1. Consent Mode
  window.gtag?.('consent', 'update', {
    ad_storage: adGranted ? 'granted' : 'denied',
    ad_user_data: adGranted ? 'granted' : 'denied',
    ad_personalization: adGranted ? 'granted' : 'denied',
    analytics_storage: analytics ? 'granted' : 'denied'
  });

  // 2. Zapis w localStorage
  saveConsent({
    necessary: true,
    analytics,
    marketing,
    ad_storage: adGranted,
    ad_user_data: adGranted,
    ad_personalization: adGranted,
    version: CONSENT_VERSION
  });

  // 3. Event do GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cookie_consent_submitted",
    consent_action: "save_choices",
    consent_analytics: analytics ? "granted" : "denied",
    consent_marketing: marketing ? "granted" : "denied",
    consent_ad_storage: adGranted ? "granted" : "denied",
    consent_ad_user_data: adGranted ? "granted" : "denied",
    consent_ad_personalization: adGranted ? "granted" : "denied"
  });

  setOpen(false);
};



  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl">
        <h2 className="text-lg font-semibold mb-2">Ustawienia plików cookies</h2>
        <p className="text-sm text-slate-700 mb-4">
          Używamy niezbędnych cookies do działania strony. Dodatkowe (analityczne i marketingowe)
          tylko za Twoją zgodą. Szczegóły znajdziesz w&nbsp;
          <a href="/polityka-cookies" className="underline text-indigo-600">polityce cookies</a> oraz&nbsp;
          <a href="/polityka-prywatnosci" className="underline text-indigo-600">polityce prywatności</a>.
        </p>

        <div className="grid gap-3 md:grid-cols-3 mb-4">
          <label className="flex items-start gap-3 rounded-lg border p-3 text-sm">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <div className="font-medium">Niezbędne</div>
              <div className="text-slate-600">Zawsze aktywne – potrzebne do działania strony.</div>
            </div>
          </label>

          <label className="flex items-start gap-3 rounded-lg border p-3 text-sm">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1" />
            <div>
              <div className="font-medium">Analityczne</div>
              <div className="text-slate-600">Pomagają nam ulepszać serwis (np. GA).</div>
            </div>
          </label>

          <label className="flex items-start gap-3 rounded-lg border p-3 text-sm">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1" />
            <div>
              <div className="font-medium">Marketingowe</div>
              <div className="text-slate-600">Wspierają personalizację reklam.</div>
            </div>
          </label>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={saveChoices}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Zapisz wybór
          </button>
          <button
            onClick={acceptAll}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-500"
          >
            Akceptuj wszystkie
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-400 text-right">Wersja zgód: {CONSENT_VERSION}</p>
      </div>
    </div>
  );
};

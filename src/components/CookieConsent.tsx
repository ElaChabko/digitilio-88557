import React, { useEffect, useState } from "react";

type Consent = {
  necessary: true;        // zawsze true, nie do wyłączenia
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;        // podbijaj przy zmianach treści
};

const STORAGE_KEY = "cookieConsentDigitilio";
const CONSENT_VERSION = "2025-11-11";

function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Consent : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: Omit<Consent,"timestamp">) {
  const payload: Consent = {
    ...consent,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  // powiadom inne części aplikacji (np. LazyGtag) o zmianie
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored || stored.version !== CONSENT_VERSION) {
      // brak zgody lub nowa wersja – pokaż baner
      setOpen(true);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true, version: CONSENT_VERSION });
    setOpen(false);
  };

  const saveChoices = () => {
    saveConsent({ necessary: true, analytics, marketing, version: CONSENT_VERSION });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-xl border bg-white text-slate-900 shadow-xl">
        <div className="p-4 md:p-6">
          <h2 className="text-base font-semibold mb-2">Ustawienia plików cookies</h2>
          <p className="text-sm leading-relaxed mb-4">
            Używamy niezbędnych plików cookies do prawidłowego działania serwisu.
            Dodatkowo możemy używać cookies analitycznych i marketingowych – tylko jeśli wyrazisz zgodę.
            Szczegóły znajdziesz w{" "}
            <a href="/polityka-cookies" className="underline">Polityce plików cookies</a>{" "}
            i <a href="/polityka-prywatnosci" className="underline">Polityce prywatności</a>.
          </p>

          <div className="grid gap-3 md:grid-cols-3">
            <label className="flex items-start gap-3 rounded-lg border p-3">
              <input type="checkbox" checked readOnly className="mt-1" />
              <div className="text-sm">
                <div className="font-medium">Niezbędne</div>
                <div className="text-slate-600">Wymagane do działania strony (zawsze aktywne).</div>
              </div>
            </label>

            <label className="flex items-start gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1"
              />
              <div className="text-sm">
                <div className="font-medium">Analityczne</div>
                <div className="text-slate-600">Pomagają ulepszać serwis (np. Google Analytics).</div>
              </div>
            </label>

            <label className="flex items-start gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1"
              />
              <div className="text-sm">
                <div className="font-medium">Marketingowe</div>
                <div className="text-slate-600">Personalizacja treści i reklamy (jeśli włączone).</div>
              </div>
            </label>
          </div>

          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={saveChoices}
              className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
            >
              Zapisz wybór
            </button>
            <button
              onClick={acceptAll}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
            >
              Akceptuj wszystko
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Wersja zgód: {CONSENT_VERSION}
          </p>
        </div>
      </div>
    </div>
  );
};

export function useCookieConsent() {
  const stored = getStoredConsent();
  return stored;
}

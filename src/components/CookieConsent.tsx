import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { X } from "lucide-react";

import {
  applyGoogleConsent,
  CONSENT_VERSION,
  createConsentChoice,
  getValidStoredConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  pushConsentSubmittedEvent,
  saveConsent,
} from "@/lib/consent";

export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const [analytics, setAnalytics] =
    useState(false);

  const [marketing, setMarketing] =
    useState(false);

  const [hasSavedConsent, setHasSavedConsent] =
    useState(false);

  const showCookieSettings = useCallback(() => {
    const stored = getValidStoredConsent();

    if (stored) {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setHasSavedConsent(true);
    } else {
      setAnalytics(false);
      setMarketing(false);
      setHasSavedConsent(false);
    }

    setOpen(true);
  }, []);

  useEffect(() => {
    const stored = getValidStoredConsent();

    if (stored) {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setHasSavedConsent(true);
    } else {
      setOpen(true);
    }

    window.addEventListener(
      OPEN_COOKIE_SETTINGS_EVENT,
      showCookieSettings
    );

    return () => {
      window.removeEventListener(
        OPEN_COOKIE_SETTINGS_EVENT,
        showCookieSettings
      );
    };
  }, [showCookieSettings]);

  const saveChoice = (
    analyticsValue: boolean,
    marketingValue: boolean,
    action:
      | "accept_all"
      | "reject_all"
      | "save_choices"
  ) => {
    const choice = createConsentChoice(
      analyticsValue,
      marketingValue
    );

    /*
     * Najpierw aktualizujemy Consent Mode.
     */
    applyGoogleConsent(choice);

    /*
     * Następnie zapisujemy decyzję użytkownika.
     */
    saveConsent(choice);

    /*
     * Na końcu wysyłamy event informacyjny
     * do dataLayer.
     */
    pushConsentSubmittedEvent(
      action,
      choice
    );

    setAnalytics(analyticsValue);
    setMarketing(marketingValue);

    setHasSavedConsent(true);
    setOpen(false);
  };

  const acceptAll = () => {
    saveChoice(
      true,
      true,
      "accept_all"
    );
  };

  const rejectAdditional = () => {
    saveChoice(
      false,
      false,
      "reject_all"
    );
  };

  const saveChoices = () => {
    saveChoice(
      analytics,
      marketing,
      "save_choices"
    );
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* CLOSE - tylko jeśli użytkownik już wcześniej dokonał wyboru */}
        {hasSavedConsent && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Zamknij ustawienia cookies"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="pr-10">
          <p className="mb-2 text-sm font-medium text-primary">
            Prywatność
          </p>

          <h2
            id="cookie-consent-title"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            Ustawienia plików cookies
          </h2>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
          Używamy niezbędnych cookies do
          prawidłowego działania strony.
          Cookies analityczne i marketingowe
          wykorzystujemy tylko zgodnie z Twoimi
          ustawieniami.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Szczegóły znajdziesz w{" "}
          <Link
            to="/polityka-cookies"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            polityce cookies
          </Link>{" "}
          oraz{" "}
          <Link
            to="/polityka-prywatnosci"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            polityce prywatności
          </Link>
          .
        </p>

        {/* CATEGORIES */}
        <div className="mt-7 grid gap-3">
          {/* NECESSARY */}
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-1 h-4 w-4"
              aria-label="Cookies niezbędne - zawsze aktywne"
            />

            <div>
              <div className="font-medium text-slate-900">
                Niezbędne
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                Potrzebne do prawidłowego
                działania strony i zapisania
                Twoich ustawień prywatności.
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-primary/30">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(event) =>
                setAnalytics(
                  event.target.checked
                )
              }
              className="mt-1 h-4 w-4"
            />

            <div>
              <div className="font-medium text-slate-900">
                Analityczne
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                Pomagają zrozumieć, w jaki
                sposób użytkownicy korzystają
                ze strony i jak można ją
                ulepszać, np. za pomocą
                Google Analytics.
              </div>
            </div>
          </label>

          {/* MARKETING */}
          <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-primary/30">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(event) =>
                setMarketing(
                  event.target.checked
                )
              }
              className="mt-1 h-4 w-4"
            />

            <div>
              <div className="font-medium text-slate-900">
                Marketingowe
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                Pozwalają mierzyć działania
                reklamowe i personalizować
                komunikację marketingową, jeśli
                takie narzędzia są używane w
                Serwisie.
              </div>
            </div>
          </label>
        </div>

        {/* ACTIONS */}
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={rejectAdditional}
            className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
          >
            Odrzuć dodatkowe
          </button>

          <button
            type="button"
            onClick={saveChoices}
            className="rounded-lg border border-primary px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            Zapisz wybór
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Akceptuj wszystkie
          </button>
        </div>

        <p className="mt-5 text-right text-xs text-slate-400">
          Wersja zgód: {CONSENT_VERSION}
        </p>
      </div>
    </div>
  );
};

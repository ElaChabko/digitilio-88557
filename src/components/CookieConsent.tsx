import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Link, useLocation } from "react-router-dom";
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

const COPY = {
  pl: {
    close: "Zamknij ustawienia cookies",
    eyebrow: "Prywatność",
    title: "Ustawienia plików cookies",
    intro:
      "Używamy niezbędnych cookies do prawidłowego działania strony. Cookies analityczne i marketingowe wykorzystujemy tylko zgodnie z Twoimi ustawieniami.",
    detailsBefore: "Szczegóły znajdziesz w",
    cookiesLink: "polityce cookies",
    and: "oraz",
    privacyLink: "polityce prywatności",
    detailsAfter: ".",
    necessaryAria: "Cookies niezbędne - zawsze aktywne",
    necessary: "Niezbędne",
    necessaryDesc:
      "Potrzebne do prawidłowego działania strony i zapisania Twoich ustawień prywatności.",
    analytics: "Analityczne",
    analyticsDesc:
      "Pomagają zrozumieć, w jaki sposób użytkownicy korzystają ze strony i jak można ją ulepszać, np. za pomocą Google Analytics.",
    marketing: "Marketingowe",
    marketingDesc:
      "Pozwalają mierzyć działania reklamowe i personalizować komunikację marketingową, jeśli takie narzędzia są używane w Serwisie.",
    reject: "Odrzuć dodatkowe",
    save: "Zapisz wybór",
    accept: "Akceptuj wszystkie",
    version: "Wersja zgód",
  },
  en: {
    close: "Close cookie settings",
    eyebrow: "Privacy",
    title: "Cookie settings",
    intro:
      "We use necessary cookies to make this website work. Analytics and marketing cookies are used only in line with your settings.",
    detailsBefore: "Details are in the",
    cookiesLink: "Cookie Policy",
    and: "and",
    privacyLink: "Privacy Policy",
    detailsAfter: " (both in Polish).",
    necessaryAria: "Necessary cookies - always active",
    necessary: "Necessary",
    necessaryDesc:
      "Required for the website to work and to remember your privacy settings.",
    analytics: "Analytics",
    analyticsDesc:
      "Help me understand how visitors use the website and how to improve it, e.g. with Google Analytics.",
    marketing: "Marketing",
    marketingDesc:
      "Allow measuring advertising and personalising marketing communication, if such tools are used on the website.",
    reject: "Reject optional",
    save: "Save choices",
    accept: "Accept all",
    version: "Consent version",
  },
};

export const CookieConsent: React.FC = () => {
  const { pathname } = useLocation();
  const t =
    pathname === "/en" || pathname.startsWith("/en/")
      ? COPY.en
      : COPY.pl;

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
      <div className="relative max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:max-h-none sm:p-8">
        {/* CLOSE - tylko jeśli użytkownik już wcześniej dokonał wyboru */}
        {hasSavedConsent && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label={t.close}
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="pr-10">
          <p className="mb-2 text-sm font-medium text-primary">
            {t.eyebrow}
          </p>

          <h2
            id="cookie-consent-title"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            {t.title}
          </h2>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-4">
          {t.intro}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {t.detailsBefore}{" "}
          <Link
            to="/polityka-cookies"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.cookiesLink}
          </Link>{" "}
          {t.and}{" "}
          <Link
            to="/polityka-prywatnosci"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.privacyLink}
          </Link>
          {t.detailsAfter}
        </p>

        {/* CATEGORIES */}
        <div className="mt-4 grid gap-2 sm:mt-7 sm:gap-3">
          {/* NECESSARY */}
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-3 sm:p-4">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-1 h-4 w-4"
              aria-label={t.necessaryAria}
            />

            <div>
              <div className="font-medium text-slate-900">
                {t.necessary}
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                {t.necessaryDesc}
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-3 transition-colors hover:border-primary/30 sm:p-4">
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
                {t.analytics}
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                {t.analyticsDesc}
              </div>
            </div>
          </label>

          {/* MARKETING */}
          <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-slate-200 p-3 transition-colors hover:border-primary/30 sm:p-4">
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
                {t.marketing}
              </div>

              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                {t.marketingDesc}
              </div>
            </div>
          </label>
        </div>

        {/* ACTIONS */}
        <div className="mt-4 grid gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
          <button
            type="button"
            onClick={rejectAdditional}
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 sm:py-3"
          >
            {t.reject}
          </button>

          <button
            type="button"
            onClick={saveChoices}
            className="rounded-lg border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5 sm:py-3"
          >
            {t.save}
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:py-3"
          >
            {t.accept}
          </button>
        </div>

        <p className="mt-3 text-right text-xs text-slate-400 sm:mt-5">
          {t.version}: {CONSENT_VERSION}
        </p>
      </div>
    </div>
  );
};

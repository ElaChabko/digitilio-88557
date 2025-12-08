import React, { useEffect } from "react";

const STORAGE_KEY = "cookieConsentDigitilio";

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

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

// Możesz nazwać to tak, jak Ci wygodniej: LazyGtag / ConsentRestorer
export const LazyGtag: React.FC = () => {
  useEffect(() => {
    const applyConsentFromStorage = () => {
      const saved = readConsent();
      if (!saved || !window.gtag) return;

      window.gtag("consent", "update", {
        ad_user_data: saved.ad_user_data ? "granted" : "denied",
        ad_personalization: saved.ad_personalization ? "granted" : "denied",
        ad_storage: saved.ad_storage ? "granted" : "denied",
        analytics_storage: saved.analytics ? "granted" : "denied",
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent_restored",
        consent_analytics: saved.analytics ? "granted" : "denied",
        consent_marketing: saved.marketing ? "granted" : "denied",
        consent_ad_storage: saved.ad_storage ? "granted" : "denied",
        consent_ad_user_data: saved.ad_user_data ? "granted" : "denied",
        consent_ad_personalization: saved.ad_personalization ? "granted" : "denied",
      });
    };

    // 1) Przy pierwszym załadowaniu strony
    applyConsentFromStorage();

    // 2) Reagowanie na zmianę zgód bez przeładowania (bo CookieConsent wysyła event)
    const handler = () => applyConsentFromStorage();
    window.addEventListener("cookie-consent-updated", handler);

    return () => {
      window.removeEventListener("cookie-consent-updated", handler);
    };
  }, []);

  return null;
};

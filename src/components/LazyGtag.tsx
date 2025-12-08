import React, { useEffect } from "react";

const STORAGE_KEY = "cookieConsentDigitilio";
const GTM_ID = "GTM-5N9FPPB7"; // ← Twój GTM ID

type ConsentPreferences = {
  analytics: boolean;
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
};

function readConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export const LazyGtag: React.FC = () => {
  useEffect(() => {
    const loadGTM = () => {
      if (document.getElementById("gtm-script")) return;

      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    const saved = readConsent();
    if (saved) {
      // 1. Ustawienia domyślne Consent Mode
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag("consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 500
      });

      // 2. Aktualizacja zgód zgodnie z zapisanymi preferencjami
      gtag("consent", "update", {
        ad_user_data: saved.ad_user_data ? "granted" : "denied",
        ad_personalization: saved.ad_personalization ? "granted" : "denied",
        ad_storage: saved.ad_storage ? "granted" : "denied",
        analytics_storage: saved.analytics ? "granted" : "denied"
      });

      // 3. Dopiero teraz załaduj GTM
      loadGTM();
    }

    // 4. Nasłuchuj na aktualizację zgód
    const handler = () => {
      const updated = readConsent();
      if (updated) {
        // jak wyżej
        window.gtag("consent", "update", {
          ad_user_data: updated.ad_user_data ? "granted" : "denied",
          ad_personalization: updated.ad_personalization ? "granted" : "denied",
          ad_storage: updated.ad_storage ? "granted" : "denied",
          analytics_storage: updated.analytics ? "granted" : "denied"
        });

        loadGTM();
      }
    };

    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, []);

  return null;
};

import React, { useEffect, useState } from "react";

const GA_ID = "G-CF6N5XG77T"; // ← Twój Google Analytics 4 Measurement ID
const STORAGE_KEY = "cookieConsentDigitilio";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1) Przygotuj dataLayer i gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    // 2) Ustaw domyślnie "denied" (z wait_for_update)
    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      wait_for_update: 500,
    });

    const loadGA = (consent: ConsentPreferences) => {
      if (loaded || !GA_ID) return;

      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s1);

      const s2 = document.createElement("script");
      s2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `;
      document.head.appendChild(s2);

      gtag("consent", "update", {
        ad_user_data: consent.ad_user_data ? "granted" : "denied",
        ad_personalization: consent.ad_personalization ? "granted" : "denied",
        ad_storage: consent.ad_storage ? "granted" : "denied",
        analytics_storage: consent.analytics ? "granted" : "denied",
      });

      setLoaded(true);
    };

    // 3) Jeśli zgoda już była – załaduj GA
    const saved = readConsent();
    if (saved) loadGA(saved);

    // 4) Nasłuchuj zdarzenia z banera
    const handler = () => {
      const newConsent = readConsent();
      if (newConsent) loadGA(newConsent);
    };

    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, [loaded]);

  return null;
};

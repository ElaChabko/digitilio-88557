import React, { useEffect, useState } from "react";

const GA_ID = "G-CF6N5XG77T"; // ← Twój Measurement ID

const STORAGE_KEY = "cookieConsentDigitilio";

function readAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const obj = JSON.parse(raw);
    return !!obj?.analytics;
  } catch {
    return false;
  }
}

export const LazyGtag: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1) Ustaw domyślne odmowy (Consent Mode v2)
    //    zanim jakiekolwiek tagi zostaną załadowane.
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      wait_for_update: 500
    });

    const loadGa = () => {
      if (loaded) return;
      if (!GA_ID) return;
      if (!readAnalyticsConsent()) return; // brak zgody → nie ładujemy

      // 2) Załaduj GA4
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

      // 3) Zaktualizuj zgodę (analytics_storage = granted)
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted"
      });

      setLoaded(true);
    };

    // spróbuj od razu (jeśli już kiedyś zaakceptowano)
    loadGa();

    // nasłuchuj eventu z banera
    const handler = () => loadGa();
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, [loaded]);

  return null;
};

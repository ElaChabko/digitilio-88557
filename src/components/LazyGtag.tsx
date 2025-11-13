import React, { useEffect, useState } from "react";

const GA_ID = "G-XXXXXXXXXX"; // TODO: wstaw swój identyfikator GA4

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem("cookieConsentDigitilio");
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
    const load = () => {
      if (loaded) return;
      if (!hasAnalyticsConsent() || !GA_ID) return;

      // tag base
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s1);

      // config
      const s2 = document.createElement("script");
      s2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CF6N5XG7T7');
      `;
      document.head.appendChild(s2);

      setLoaded(true);
    };

    // spróbuj od razu
    load();

    // i nasłuchuj zmian zgody
    const handler = () => load();
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, [loaded]);

  return null;
};

import React, { useEffect, useState } from "react";

const GA_ID = "G-CF6N5XG77T"; // ← Twój GA4 ID
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
  useEffect(() => {
    // 1) Przygotuj dataLayer i gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    // 2) Ustaw domyślne zgody (denied) + wait_for_update
    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      wait_for_update: 500
    });

    // 3) Zawsze załaduj gtag.js — Consent Mode wymaga jego obecności
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(s2);

    // 4) Jeśli zgoda już zapisana → zaktualizuj
    const saved = readConsent();
    if (saved) {
      gtag("consent", "update", {
        ad_user_data: saved.ad_user_data ? "granted" : "denied",
        ad_personalization: saved.ad_personalization ? "granted" : "denied",
        ad_storage: saved.ad_storage ? "granted" : "denied",
        analytics_storage: saved.analytics ? "granted" : "denied",
      });
    }

    // 5) Obsłuż zdarzenie z banera (cookie-consent-updated)
    const handler = () => {
      const newConsent = readConsent();
      if (newConsent) {
        gtag("consent", "update", {
          ad_user_data: newConsent.ad_user_data ? "granted" : "denied",
          ad_personalization: newConsent.ad_personalization ? "granted" : "denied",
          ad_storage: newConsent.ad_storage ? "granted" : "denied",
          analytics_storage: newConsent.analytics ? "granted" : "denied",
        });
      }
    };

    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, []);

  return null;
};

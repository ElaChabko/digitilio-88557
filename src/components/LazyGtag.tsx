import React, { useEffect } from "react";

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

export const ConsentRestorer: React.FC = () => {
  useEffect(() => {
    // Sprawdź czy użytkownik już kiedyś wyraził zgodę
    const saved = readConsent();
    
    if (saved) {
      console.log("Przywracam zgody z LocalStorage");
      // Wyślij sygnał UPDATE do GTM (który już jest załadowany z index.html)
      window.gtag("consent", "update", {
        ad_user_data: saved.ad_user_data ? "granted" : "denied",
        ad_personalization: saved.ad_personalization ? "granted" : "denied",
        ad_storage: saved.ad_storage ? "granted" : "denied",
        analytics_storage: saved.analytics ? "granted" : "denied"
      });
      
      // Opcjonalnie: Push eventu, by wyzwolić tagi w GTM
      window.dataLayer.push({ event: "cookie_consent_restored" });
    }
  }, []);

  return null;
};

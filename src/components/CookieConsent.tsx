import React, { useEffect, useState } from "react";

const STORAGE_KEY = "cookieConsentDigitilio";

const defaultConsent = {
  analytics: false,
  ad_storage: false,
  ad_user_data: false,
  ad_personalization: false,
};

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      analytics: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  };

  const handleOnlyNecessary = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultConsent));
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        padding: "16px",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <p style={{ margin: 0 }}>
        Używamy plików cookie do celów analitycznych i marketingowych. Możesz
        zaakceptować wszystkie lub tylko niezbędne.
      </p>
      <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
        <button onClick={handleAcceptAll}>Akceptuj wszystkie</button>
        <button onClick={handleOnlyNecessary}>Tylko niezbędne</button>
      </div>
    </div>
  );
};

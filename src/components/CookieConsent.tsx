import React, { useEffect, useState } from "react";

const STORAGE_KEY = "cookieConsentDigitilio";

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true); // pokaż baner, jeśli brak wyboru
    }
  }, []);

  const acceptAll = () => {
    // Zapisz zgodę
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: true }));

    // Wyślij event dla LazyGtag
    window.dispatchEvent(new Event("cookie-consent-updated"));

    // Ukryj baner
    setVisible(false);
  };

  const declineAll = () => {
    // Zapisz odmowę (można później użyć, np. do stylu działania strony)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: false }));

    // Ukryj baner
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#fff",
      padding: "1rem",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      zIndex: 9999
    }}>
      <p style={{ margin: 0 }}>
        Używamy plików cookies w celach analitycznych i marketingowych. Czy wyrażasz na to zgodę?
      </p>
      <div style={{ marginTop: "0.5rem" }}>
        <button onClick={acceptAll} style={{ marginRight: "1rem" }}>Akceptuję</button>
        <button onClick={declineAll}>Odrzucam</button>
      </div>
    </div>
  );
};

import React, { useEffect } from "react";

import {
  applyGoogleConsent,
  getValidStoredConsent,
  pushConsentRestoredEvent,
} from "@/lib/consent";

export const LazyGtag: React.FC = () => {
  useEffect(() => {
    const saved =
      getValidStoredConsent();

    /*
     * Brak zapisanej zgody albo stara wersja:
     * zostają wartości default = denied
     * ustawione w index.html.
     */
    if (!saved) {
      return;
    }

    /*
     * Przywracamy ostatnią ważną decyzję
     * użytkownika.
     */
    applyGoogleConsent(saved);

    /*
     * Event wyłącznie informacyjny /
     * diagnostyczny.
     */
    pushConsentRestoredEvent(saved);
  }, []);

  return null;
};

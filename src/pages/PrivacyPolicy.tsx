import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main style={{ fontFamily: "Poppins, sans-serif", maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Polityka prywatności serwisu Digitilio.pl</h1>
      <p><strong>Data ostatniej aktualizacji:</strong> 11 listopada 2025 r.</p>

      <h2>1. Postanowienia ogólne</h2>
      <p>
        Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych użytkowników korzystających ze strony internetowej
        <strong> digitilio.pl </strong> (dalej: „Serwis”).
      </p>
      <p>
        Administratorem danych osobowych jest <strong>Elżbieta Chabko</strong>, prowadząca działalność gospodarczą pod nazwą „Digitilio”,
        z siedzibą w Polsce, NIP: [tu wstaw numer NIP].
      </p>

      <h2>2. Zakres i cele przetwarzania danych</h2>
      <p>
        Administrator przetwarza dane osobowe użytkowników w związku z korzystaniem z Serwisu, w szczególności w celu umożliwienia kontaktu,
        realizacji usług, wysyłki newslettera, analizy ruchu na stronie oraz zapewnienia prawidłowego działania Serwisu.
      </p>

      {/* możesz dodać tu całą pozostałą treść z polityki */}
      <p>Pełna treść polityki prywatności znajduje się na tej stronie.</p>

      <h2>8. Kontakt</h2>
      <p>
        W sprawach związanych z ochroną danych osobowych można skontaktować się z Administratorem:
        <a href="mailto:elachabjo@digitilio.pl"> elachabjo@digitilio.pl</a>
      </p>
    </main>
  );
};

export default PrivacyPolicy;

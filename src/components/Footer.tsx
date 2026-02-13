<footer className="bg-primary text-primary-foreground py-12">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

      {/* LEWA */}
      <p className="text-sm text-center md:text-left">
        © {currentYear} Digitilio. Wszystkie prawa zastrzeżone.
      </p>

      {/* ŚRODEK – BADGE */}
      <div className="flex justify-center gap-6">
        <a href="https://verify.skilljar.com/c/6cwoxoibxdxa" target="_blank" rel="noopener noreferrer">
          <img
            src={badgeContent}
            alt="LinkedIn Content & Creative Design"
            className="h-14 w-auto opacity-90 hover:opacity-100 transition"
          />
        </a>

        <a href="https://verify.skilljar.com/c/vdsyqw26eqnt" target="_blank" rel="noopener noreferrer">
          <img
            src={badgeFundamentals}
            alt="LinkedIn Marketing Fundamentals"
            className="h-14 w-auto opacity-90 hover:opacity-100 transition"
          />
        </a>

        <a href="https://verify.skilljar.com/c/zak7b7u7mapy" target="_blank" rel="noopener noreferrer">
          <img
            src={badgeStrategy}
            alt="LinkedIn Marketing Strategy"
            className="h-14 w-auto opacity-90 hover:opacity-100 transition"
          />
        </a>
      </div>

      {/* PRAWA */}
      <div className="flex justify-center md:justify-end items-center gap-6">
        <a href="/polityka-prywatnosci" className="text-sm hover:text-accent transition-colors">
          Polityka prywatności
        </a>

        <a href="/polityka-cookies" className="text-sm hover:text-accent transition-colors">
          Polityka plików cookies
        </a>

        <a
          href="https://www.linkedin.com/in/ela-chabko/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

    </div>

  </div>
</footer>

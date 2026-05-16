function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-black text-white">
            Fattigmanns <span className="text-amber-300">Bil AS</span>
          </h2>

          <p className="mt-3 max-w-sm leading-6">
            En moderne bruktbilplattform laget som et fullstack
            porteføljeprosjekt med React, Vite, Tailwind, Express og MongoDB.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Navigasjon</h3>

          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="/"
                className="rounded hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              >
                Hjem
              </a>
            </li>
            <li>
              <a
                href="#biler"
                className="rounded hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              >
                Biler
              </a>
            </li>
            <li>
              <a
                href="#om-oss"
                className="rounded hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              >
                Om oss
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="rounded hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Kontakt</h3>

          <ul className="mt-3 space-y-2">
            <li>E-post: kontakt@fattigmannsbil.no</li>
            <li>Telefon: 123 45 678</li>
            <li>Adresse: Studentveien 1, 3800 Bø</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 Fattigmanns Bil AS. Porteføljeprosjekt.
      </div>
    </footer>
  );
}

export default Footer;
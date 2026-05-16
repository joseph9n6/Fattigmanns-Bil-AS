import { useState } from "react";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleThemeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="rounded-lg text-xl font-black tracking-tight text-white focus:outline-none focus:ring-4 focus:ring-amber-300/60"
            aria-label="Gå til forsiden"
          >
            Fattigmanns <span className="text-amber-300">Bil AS</span>
          </a>

          <button
            type="button"
            onClick={handleThemeToggle}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:border-amber-300 hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
            aria-label={isDarkMode ? "Bytt til lys modus" : "Bytt til mørk modus"}
            title={isDarkMode ? "Lys modus" : "Mørk modus"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
          <a
            href="/"
            className="rounded-lg hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Hjem
          </a>
          
          <a
            href="#biler"
            className="rounded-lg hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Biler
          </a>

          <a
            href="#om-oss"
            className="rounded-lg hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Om oss
          </a>

          <a
            href="#kontakt"
            className="rounded-lg hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Kontakt oss
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
         <a
            href="/login"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white hover:border-amber-300 hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Logg inn
          </a>

          <a
            href="/registrer"
            className="rounded-xl bg-amber-300 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            Registrer deg
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
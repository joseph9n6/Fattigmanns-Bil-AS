function Register() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-slate-950 px-4 py-20">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Registrer deg
          </p>

          <h1 className="text-3xl font-black text-white">Opprett konto</h1>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Lag en konto for å lagre favoritter, sende henvendelser og senere
            legge ut egne annonser.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Navn
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Ola Nordmann"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                E-post
              </label>

              <input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="din@epost.no"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Passord
              </label>

              <input
                id="register-password"
                type="password"
                autoComplete="new-password"
                placeholder="Minst 8 tegn"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
              />
            </div>

            <label className="flex gap-3 text-sm leading-6 text-slate-300">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 accent-amber-300"
              />
              <span>
                Jeg godtar at Fattigmanns Bil AS lagrer opplysningene mine for å
                opprette konto.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-300 px-5 py-3 font-bold text-slate-950 hover:bg-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
            >
              Opprett konto
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Har du allerede konto?{" "}
            <a
              href="/login"
              className="font-bold text-amber-300 hover:text-amber-200"
            >
              Logg inn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
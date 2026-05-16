import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[80vh] max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                Fattigmanns Bil AS
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Bruktbiler for vanlige folk.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                En moderne bruktbilplattform bygget med React, Vite og Tailwind.
                Senere skal prosjektet få backend, database, bildeopplasting og
                admin-panel.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#biler"
                  className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-slate-950 hover:bg-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
                >
                  Se biler
                </a>

                <a
                  href="#om-oss"
                  className="rounded-xl border border-white/15 px-6 py-3 font-bold text-white hover:border-amber-300 hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/60"
                >
                  Om prosjektet
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/bilder til forsiden/toyota yaris hatchback.jfif"
                  alt="Toyota Yaris bruktbil"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
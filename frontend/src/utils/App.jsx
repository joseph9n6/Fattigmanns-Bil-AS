import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
          Bruktbiler for vanlige folk
        </p>

        <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Rimelige biler uten fancy tull.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Fattigmanns Bil AS er starten på et moderne porteføljeprosjekt bygget
          med React, Vite og Tailwind.
        </p>
      </main>
    </div>
  );
}

export default App;
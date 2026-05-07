"use client";

import { useEffect, useState } from "react";

export default function WeddingLuxury() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-09-19T16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f8f4ef] text-[#442d20] overflow-x-hidden">

      {/* ENVELOPE */}
      <section className="relative h-[180vh]">

        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 opacity-20 blur-sm"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />

          {/* ENVELOPE */}
          <div className="relative animate-float">

            <div className="absolute inset-0 blur-3xl bg-black/20 rounded-full translate-y-10" />

            <div className="relative w-[340px] h-[240px] sm:w-[420px] sm:h-[300px] bg-[#8d1d2b] rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">

              {/* FLAP */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-[#9f2233] z-20"
                style={{
                  clipPath: "polygon(0 0,100% 0,50% 100%)",
                }}
              />

              {/* PAPER */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] h-[82%] bg-[#fffdf9] rounded-t-2xl shadow-inner flex items-center justify-center text-center px-6">

                <div>

                  <div className="uppercase tracking-[0.35em] text-xs text-[#7d5d4f] mb-5">
                    19 Septembrie 2026
                  </div>

                  <div className="text-4xl italic">
                    Diana
                  </div>

                  <div className="text-xl my-2">
                    &
                  </div>

                  <div className="text-4xl italic">
                    Ciprian
                  </div>

                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[#8b6b55] animate-pulse">
                    Scroll pentru deschidere
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INVITATION */}
      <section className="relative -mt-[30vh] z-20">

        <div className="max-w-5xl mx-auto bg-[#fffdf9] rounded-t-[3rem] shadow-[0_-20px_80px_rgba(0,0,0,0.12)] overflow-hidden border border-[#eaded3]">

          {/* HERO */}
          <section className="relative min-h-screen overflow-hidden">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white px-6 py-24">

              <div className="tracking-[0.45em] uppercase text-xs mb-6">
                19 SEPTEMBRIE 2026
              </div>

              <h1 className="text-7xl md:text-8xl italic leading-none drop-shadow-2xl">
                Diana
              </h1>

              <div className="text-4xl my-4">
                &
              </div>

              <h1 className="text-7xl md:text-8xl italic leading-none drop-shadow-2xl">
                Ciprian
              </h1>

              <div className="mt-12 max-w-2xl text-xl md:text-2xl leading-10 font-light">
                Și astfel începe pentru totdeauna...
                <br />
                Vă invităm să ne fiți alături în cea mai importantă zi din viața noastră.
              </div>

            </div>

          </section>

          {/* PARENTS */}
          <section className="px-8 py-24 bg-[#fffdf9]">

            <div className="text-center mb-16">

              <div className="uppercase tracking-[0.4em] text-xs text-[#9c7a63] mb-6">
                Alături de părinții noștri
              </div>

              <div className="grid grid-cols-2 gap-8">

                <div className="bg-[#f8f4ef] rounded-[2rem] p-8 shadow-lg">

                  <div className="text-3xl italic">
                    Elena și Mugurel 🕊️
                  </div>

                  <div className="mt-4 uppercase tracking-[0.3em] text-[#8b6b55]">
                    OLTEANU
                  </div>

                </div>

                <div className="bg-[#f8f4ef] rounded-[2rem] p-8 shadow-lg">

                  <div className="text-3xl italic">
                    Elena și Constantin 🕊️
                  </div>

                  <div className="mt-4 uppercase tracking-[0.3em] text-[#8b6b55]">
                    ONODEA
                  </div>

                </div>

              </div>

              <div className="mt-20">

                <div className="uppercase tracking-[0.4em] text-xs text-[#9c7a63] mb-6">
                  Și de nașii noștri dragi
                </div>

                <div className="text-4xl italic">
                  Lavinia și Dănuț Marian
                </div>

              </div>

            </div>

          </section>

          {/* PROGRAM */}
          <section className="px-8 py-28 bg-[#f7f1eb]">

            <div className="text-center mb-20">

              <div className="uppercase tracking-[0.4em] text-xs text-[#9c7a63] mb-6">
                Programul evenimentului
              </div>

              <h2 className="text-6xl italic">
                O zi de neuitat
              </h2>

            </div>

            <div className="space-y-16 max-w-3xl mx-auto">

              <div className="text-center">
                <div className="text-5xl mb-6">💍</div>

                <div className="text-3xl italic mb-4">
                  Cununia Civilă
                </div>

                <div className="leading-10 text-xl text-[#7b5b47]">
                  Casa Căsătoriilor
                  <br />
                  Mangalia
                  <br />
                  Ora 16:00
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#eaded3]" />

              <div className="text-center">
                <div className="text-5xl mb-6">⛪</div>

                <div className="text-3xl italic mb-4">
                  Cununia Religioasă
                </div>

                <div className="leading-10 text-xl text-[#7b5b47]">
                  Biserica Sf. Gheorghe
                  <br />
                  Mangalia
                  <br />
                  Ora 17:00
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#eaded3]" />

              <div className="text-center">
                <div className="text-5xl mb-6">🥂</div>

                <div className="text-3xl italic mb-4">
                  Petrecerea
                </div>

                <div className="leading-10 text-xl text-[#7b5b47]">
                  Restaurant Atena
                  <br />
                  Saturn
                  <br />
                  Ora 19:30
                </div>
              </div>

            </div>

          </section>

          {/* RSVP */}
          <section className="px-8 py-28 bg-[#fffdf9] text-center">

            <div className="text-6xl mb-8">
              🌹
            </div>

            <h2 className="text-5xl italic mb-10">
              Vă rugăm să confirmați
            </h2>

            <div className="text-xl leading-10 max-w-2xl mx-auto text-[#7b5b47]">
              Vă rugăm să ne confirmați prezența până la data de
              <br />
              <span className="italic text-3xl text-[#442d20]">
                1 Septembrie 2026
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">

              <a
                href="https://wa.me/44785050154"
                className="bg-[#8d1d2b] text-white rounded-full py-5 text-xl shadow-xl"
              >
                Diana
              </a>

              <a
                href="https://wa.me/44752146011"
                className="bg-[#8d1d2b] text-white rounded-full py-5 text-xl shadow-xl"
              >
                Ciprian
              </a>

            </div>

          </section>

          {/* COUNTDOWN */}
          <section className="px-8 py-28 bg-[#f7f1eb]">

            <div className="text-center mb-16">

              <h2 className="text-5xl italic">
                Numărătoarea inversă începe acum
              </h2>

            </div>

            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto text-center">

              <div>
                <div className="text-6xl italic">
                  {timeLeft.days}
                </div>

                <div className="mt-4 uppercase tracking-[0.3em] text-xs">
                  Zile
                </div>
              </div>

              <div>
                <div className="text-6xl italic">
                  {timeLeft.hours}
                </div>

                <div className="mt-4 uppercase tracking-[0.3em] text-xs">
                  Ore
                </div>
              </div>

              <div>
                <div className="text-6xl italic">
                  {timeLeft.minutes}
                </div>

                <div className="mt-4 uppercase tracking-[0.3em] text-xs">
                  Minute
                </div>
              </div>

              <div>
                <div className="text-6xl italic text-[#8d1d2b]">
                  {timeLeft.seconds}
                </div>

                <div className="mt-4 uppercase tracking-[0.3em] text-xs">
                  Secunde
                </div>
              </div>

            </div>

            <div className="mt-24 text-center">

              <div className="text-5xl italic mb-8">
                Vă așteptăm cu drag!
              </div>

              <div className="text-6xl italic">
                Diana & Ciprian
              </div>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}
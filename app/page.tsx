"use client";

import { useEffect, useRef, useState } from "react";

export default function WeddingLuxury() {
  const [opened, setOpened] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const openInvitation = async () => {
    setOpened(true);

    try {
      await audioRef.current?.play();
    } catch {}
  };

  return (
    <main className="bg-[#f8f4ef] text-[#442d20] overflow-x-hidden">

      {/* MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {!opened ? (

        /* ENVELOPE */
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-25"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />

          <div
            onClick={openInvitation}
            className="relative cursor-pointer transition duration-700 hover:scale-105"
          >

            <div className="absolute inset-0 blur-3xl bg-black/20 rounded-full translate-y-10" />

            <div className="relative w-[340px] h-[240px] sm:w-[420px] sm:h-[300px] bg-[#8d1d2b] rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">

              {/* Flap */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-[#9f2233] z-20"
                style={{
                  clipPath: "polygon(0 0,100% 0,50% 100%)",
                }}
              />

              {/* Paper */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] h-[82%] bg-[#fffdf9] rounded-t-2xl shadow-inner flex items-center justify-center text-center px-6">

                <div>

                  <div className="uppercase tracking-[0.35em] text-xs text-[#7d5d4f] mb-5">
                    19 Septembrie 2026
                  </div>

                  <div className="text-4xl italic">
                    Diana
                  </div>

                  <div className="text-xl my-2">&</div>

                  <div className="text-4xl italic">
                    Ciprian
                  </div>

                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[#8b6b55] animate-pulse">
                    Apasă pentru deschidere
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      ) : (

        <section className="animate-fadeIn">

          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 text-center text-white px-6">

              <div className="tracking-[0.45em] uppercase text-xs mb-6">
                19 SEPTEMBRIE 2026
              </div>

              <h1 className="text-7xl md:text-8xl italic leading-none">
                Diana
              </h1>

              <div className="text-4xl my-4">&</div>

              <h1 className="text-7xl md:text-8xl italic leading-none">
                Ciprian
              </h1>

              <div className="mt-10 text-xl md:text-2xl leading-10 max-w-3xl mx-auto">
                Și astfel începe pentru totdeauna...
                <br />
                Vă invităm să ne fiți alături în cea mai importantă zi din viața noastră.
              </div>

            </div>

          </section>

          {/* PARENTS */}
          <section className="relative py-24 px-6">

            <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl p-10 relative overflow-hidden">

              <div className="absolute left-0 top-0 w-40 opacity-90">
                🌺
              </div>

              <div className="text-center">

                <div className="uppercase tracking-[0.3em] text-sm mb-8">
                  Alături de părinții noștri
                </div>

                <div className="grid grid-cols-2 gap-8 text-center">

                  <div>
                    <div className="text-3xl italic">
                      Elena și Mugurel 🕊️
                    </div>

                    <div className="mt-4 uppercase tracking-[0.3em] text-[#8b6b55]">
                      OLTEANU
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl italic">
                      Elena și Constantin 🕊️
                    </div>

                    <div className="mt-4 uppercase tracking-[0.3em] text-[#8b6b55]">
                      ONODEA
                    </div>
                  </div>

                </div>

                <div className="mt-16">

                  <div className="uppercase tracking-[0.3em] text-sm mb-6">
                    Și de nașii noștri dragi
                  </div>

                  <div className="text-4xl italic">
                    Lavinia și Dănuț Marian
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* TIMELINE */}
          <section className="py-24 px-6 bg-[#f4ede7]">

            <div className="max-w-5xl mx-auto">

              <h2 className="text-center text-6xl italic mb-20">
                Program
              </h2>

              <div className="relative">

                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#d8c9bc] -translate-x-1/2" />

                <div className="space-y-20">

                  {/* ITEM */}
                  <div className="grid grid-cols-2 items-center">

                    <div className="text-right pr-10">
                      <div className="text-5xl mb-4">💍</div>

                      <div className="font-bold text-2xl">
                        16:00
                      </div>

                      <div className="text-xl mt-2">
                        Cununia Civilă
                      </div>

                      <div className="mt-2 text-[#7c5a47]">
                        Casa Căsătoriilor
                        <br />
                        Mangalia
                      </div>
                    </div>

                    <div />
                  </div>

                  <div className="grid grid-cols-2 items-center">

                    <div />

                    <div className="pl-10">
                      <div className="text-5xl mb-4">⛪</div>

                      <div className="font-bold text-2xl">
                        17:00
                      </div>

                      <div className="text-xl mt-2">
                        Cununia Religioasă
                      </div>

                      <div className="mt-2 text-[#7c5a47]">
                        Biserica Sf. Gheorghe
                        <br />
                        Mangalia
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 items-center">

                    <div className="text-right pr-10">
                      <div className="text-5xl mb-4">🥂</div>

                      <div className="font-bold text-2xl">
                        19:30
                      </div>

                      <div className="text-xl mt-2">
                        Restaurant Atena
                      </div>

                      <div className="mt-2 text-[#7c5a47]">
                        Saturn
                      </div>
                    </div>

                    <div />
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* RSVP */}
          <section className="py-24 px-6">

            <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden">

              <div className="p-12 text-center">

                <div className="text-5xl mb-8">
                  🌹
                </div>

                <h2 className="text-5xl italic mb-8">
                  Vă rugăm să confirmați
                </h2>

                <div className="text-xl leading-10 max-w-2xl mx-auto">
                  Vă rugăm să ne confirmați prezența până la data de
                  <br />
                  <span className="italic text-3xl">
                    1 Septembrie 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-16">

                  <a
                    href="https://wa.me/44785050154"
                    className="bg-[#8d1d2b] text-white rounded-full py-5 text-xl"
                  >
                    Diana
                  </a>

                  <a
                    href="https://wa.me/44752146011"
                    className="bg-[#8d1d2b] text-white rounded-full py-5 text-xl"
                  >
                    Ciprian
                  </a>

                </div>

              </div>

            </div>

          </section>

          {/* COUNTDOWN */}
          <section className="pb-32 px-6">

            <div className="max-w-5xl mx-auto text-center">

              <div className="text-5xl italic mb-16">
                Numărătoarea inversă începe acum
              </div>

              <div className="grid grid-cols-4 gap-4">

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

              <div className="mt-20 text-6xl italic">
                Vă așteptăm cu drag!
              </div>

              <div className="mt-8 text-7xl italic">
                Diana & Ciprian
              </div>

            </div>

          </section>

        </section>

      )}

    </main>
  );
}
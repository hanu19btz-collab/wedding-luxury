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

      {/* HERO ENVELOPE */}
      <section className="relative h-[180vh]">

        {/* Sticky area */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 opacity-25 blur-sm"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />

          {/* Envelope */}
          <div className="relative animate-float">

            <div className="absolute inset-0 blur-3xl bg-black/20 rounded-full translate-y-10" />

            <div className="relative w-[340px] h-[240px] sm:w-[420px] sm:h-[300px] bg-[#8d1d2b] rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">

              {/* Flap */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-[#9f2233] z-20"
                style={{
                  clipPath: "polygon(0 0,100% 0,50% 100%)",
                }}
              />

              {/* Invitation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] h-[82%] bg-[#fffdf9] rounded-t-2xl shadow-inner flex items-center justify-center text-center px-6">

                <div>

                  <div className="uppercase tracking-[0.35em] text-xs text-[#7d5d4f] mb-5">
                    19 Septembrie 2026
                  </div>

                  <div className="text-4xl italic">
                    Diana
                  </div>

}
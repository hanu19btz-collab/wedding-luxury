"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const weddingDate = new Date("2026-09-19T16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days: String(days).padStart(3, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <main className="main">

      {/* HERO */}
      <section className="hero">

        <div className="envelope">

          <div className="lid"></div>

          <div className="letter">

            <p className="date">
              19 SEPTEMBRIE 2026
            </p>

            <h1>
              Diana
              <span>&</span>
              Ciprian
            </h1>

          </div>

        </div>

      </section>

      {/* INVITATION */}
      <section className="invitation-wrapper">

        <img
          src="/invitation-final.png"
          className="invitation"
        />

        {/* COUNTDOWN */}
        <div className="countdown">

          <div>
            <span>{timeLeft.days}</span>
            <p>ZILE</p>
          </div>

          <div>
            <span>{timeLeft.hours}</span>
            <p>ORE</p>
          </div>

          <div>
            <span>{timeLeft.minutes}</span>
            <p>MIN</p>
          </div>

          <div>
            <span>{timeLeft.seconds}</span>
            <p>SEC</p>
          </div>

        </div>

      </section>

    </main>

  );
}
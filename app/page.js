"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-09-19T16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

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
    <main className="bg-[#f7f2ed] overflow-x-hidden">

      {/* HERO ENVELOPE */}
      <section className="hero-section">
        <div className="envelope-wrapper">
          <div className="envelope">
            <div className="envelope-lid"></div>

            <div className="letter">
              <p className="date">
                19 SEPTEMBRIE 2026
              </p>

              <h1>
                Diana
                <br />
                &
                <br />
                Ciprian
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGINI */}
      <section className="image-section">
        <img src="/hero.png" alt="" />
      </section>

      <section className="image-section">
        <img src="/parents.png" alt="" />
      </section>

      <section className="image-section">
        <img src="/timeline.png" alt="" />
      </section>

      <section className="image-section">
        <img src="/rsvp.png" alt="" />
      </section>

      {/* COUNTDOWN */}
      <section className="countdown-wrapper">

        <img
          src="/countdown.png"
          alt=""
          className="countdown-image"
        />

        <div className="countdown-overlay">

          <div className="timer">
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

        </div>
      </section>

      <style jsx>{`
        main {
          min-height: 100vh;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f2ed;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .envelope-wrapper {
          perspective: 1200px;
        }

        .envelope {
          width: 340px;
          height: 230px;
          position: relative;
          background: #7d1d2a;
          box-shadow:
            0 30px 60px rgba(0,0,0,0.25);
        }

        .envelope-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: #962838;

          clip-path: polygon(
            0 0,
            50% 100%,
            100% 0
          );

          transform-origin: top;
          animation: openLid 2s ease forwards;
          z-index: 4;
        }

        .letter {
          position: absolute;
          width: 88%;
          height: 88%;
          background: white;
          left: 6%;
          top: 6%;
          z-index: 2;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          animation:
            pullLetter 2.5s ease forwards;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.15);
        }

        .date {
          letter-spacing: 4px;
          font-size: 11px;
          color: #8b7d73;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 54px;
          line-height: 1;
          text-align: center;
          color: #5b1621;
          font-family: serif;
          font-style: italic;
        }

        @keyframes openLid {
          to {
            transform: rotateX(180deg);
          }
        }

        @keyframes pullLetter {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-120px);
          }
        }

        .image-section {
          position: relative;
          z-index: 5;
          background: #f7f2ed;
        }

        .image-section img {
          width: 100%;
          display: block;
        }

        .countdown-wrapper {
          position: relative;
        }

        .countdown-image {
          width: 100%;
          display: block;
        }

        .countdown-overlay {
          position: absolute;
          top: 34%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        }

        .timer {
          display: flex;
          justify-content: center;
          gap: 22px;
        }

        .timer div {
          text-align: center;
        }

        .timer span {
          font-size: 58px;
          color: #651421;
          font-family: serif;
          font-style: italic;
        }

        .timer p {
          margin-top: 10px;
          font-size: 11px;
          letter-spacing: 3px;
          color: #8d7a6f;
        }

        @media (max-width: 768px) {
          .envelope {
            width: 300px;
            height: 210px;
          }

          h1 {
            font-size: 46px;
          }

          .timer {
            gap: 14px;
          }

          .timer span {
            font-size: 42px;
          }
        }
      `}</style>
    </main>
  );
}
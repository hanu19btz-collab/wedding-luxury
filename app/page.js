"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const progress = Math.min(scroll / 700, 1);

  const lidRotation = progress * -180;

  const letterMove = progress * -260;

  const heroOpacity =
    1 - Math.max((scroll - 350) / 350, 0);

  return (

    <main className="main">

      {/* SPACER */}

      <div className="scroll-space"></div>

      {/* HERO */}

      <section
        className="hero"
        style={{
          opacity: heroOpacity,
        }}
      >

        <div className="envelope">

          {/* LETTER */}

          <div
            className="letter-preview"
            style={{
              transform:
                `translateY(${letterMove}px)`,
            }}
          >

            <p className="preview-date">
              19 SEPTEMBRIE 2026
            </p>

            <h1>
              Diana
              <span>&</span>
              Ciprian
            </h1>

          </div>

          {/* LID */}

          <div
            className="lid"
            style={{
              transform:
                `rotateX(${lidRotation}deg)`,
            }}
          ></div>

        </div>

      </section>

      {/* INVITATION */}

      <section className="invitation-wrapper">

        <img
          src="/invitation-final.png"
          className="invitation"
        />

      </section>

    </main>

  );
}
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";

const profile = {
  location: "Magelang, Indonesia",
  available: "Available for work",
  role: "Fullstack Developer",
  intro:
    "Membangun produk digital yang modern dan interaktif, berfokus pada performa dan kemudahan pengguna.",
  specialization:
    "React, JavaScript, modern frontend architecture, and interactive interfaces",
  skills: ["JavaScript", "React"],
  stats: [
    {
      value: 3,
      label: "Years of learning JavaScript",
    },
    {
      value: 4,
      label: "Projects",
    },
  ],
};

function scrollToId(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Hero() {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const parallaxFrame = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const chars = root.querySelectorAll("[data-hero-char]");
    const bars = root.querySelectorAll("[data-hero-bar]");
    const entranceElements = root.querySelectorAll("[data-hero-entrance]");

    const headlineAnimation = animate(chars, {
      opacity: [0, 1],
      translateY: ["0.7em", "0em"],
      rotateX: [-70, 0],
      duration: 900,
      delay: stagger(28, {
        start: 150,
      }),
      ease: "outExpo",
    });

    const barsAnimation = animate(bars, {
      scaleY: [0.1, 1],
      opacity: [0, 0.45],
      duration: 1400,
      delay: stagger(70),
      ease: "outQuart",
    });

    const contentAnimation = animate(entranceElements, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      delay: stagger(100, {
        start: 500,
      }),
      ease: "outExpo",
    });

    const counterAnimations = [];
    const counters = root.querySelectorAll("[data-count]");

    counters.forEach((element) => {
      const target = Number(element.dataset.count || 0);

      const state = {
        value: 0,
      };

      const animation = animate(state, {
        value: target,
        duration: 1600,
        delay: 700,
        ease: "outExpo",
        onUpdate: () => {
          element.textContent = String(Math.round(state.value)).padStart(
            2,
            "0",
          );
        },
      });

      counterAnimations.push(animation);
    });

    return () => {
      headlineAnimation.pause();
      barsAnimation.pause();
      contentAnimation.pause();

      counterAnimations.forEach((animation) => {
        animation.pause();
      });
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const handleScroll = () => {
      if (parallaxFrame.current) return;

      parallaxFrame.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;

        if (scrollY <= heroHeight) {
          const translateY = scrollY * 0.12;
          const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.8));

          content.style.transform = `translate3d(0, ${translateY}px, 0)`;
          content.style.opacity = opacity;
        }

        parallaxFrame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (parallaxFrame.current) {
        cancelAnimationFrame(parallaxFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    const indicator = rootRef.current?.querySelector("[data-scroll-indicator]");

    if (!indicator) return;

    const animation = animate(indicator, {
      translateY: [0, 6, 0],
      opacity: [0.35, 1, 0.35],
      duration: 1400,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      animation.pause();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-16 pb-16"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(156, 177, 206, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(172, 182, 197, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "18px 100%",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="pointer-events-none absolute right-0 bottom-0 hidden h-[46vh] w-1/3 items-end gap-2 overflow-hidden pr-8 pb-16 lg:flex">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            data-hero-bar
            className="w-full origin-bottom bg-slate-500 opacity-0"
            style={{
              height: `${18 + ((index * 37) % 62)}%`,
            }}
          />
        ))}
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 will-change-transform sm:px-8"
      >
        <div
          data-hero-entrance
          className="flex flex-wrap items-center gap-4 opacity-0"
        >
          <span className="border border-slate-700 bg-slate-900/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-300 backdrop-blur-sm">
            {profile.location}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
            {profile.available}
          </span>
        </div>

        <h1
          className="mt-8 max-w-6xl text-[13vw] font-semibold leading-[0.9] tracking-[-0.045em] text-gray-100 sm:text-[9vw] lg:text-[7.2rem]"
          aria-label="Hello, I'm Ahmad. Web Developer"
        >
          {["Hello,", "I'm", "Ahmad.", "Web", "Developer"].map(
            (word, wordIndex) => (
              <span key={word} className="mr-[0.18em] inline-block">
                {word.split("").map((character, charIndex) => (
                  <span
                    key={`${word}-${charIndex}`}
                    data-hero-char
                    aria-hidden="true"
                    className={`inline-block opacity-0 ${
                      wordIndex === 2 ? "text-accent" : "text-neutral-100"
                    }`}
                  >
                    {character}
                  </span>
                ))}
              </span>
            ),
          )}
        </h1>

        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div data-hero-entrance className="max-w-xl opacity-0">
            <p className="text-xl font-medium tracking-tight text-accent">
              {profile.role}
            </p>

            <p className="text-sm leading-relaxed text-white">
              {profile.intro}
            </p>

            <p className="text-sm leading-relaxed text-accent">
              Build With{" "}
              <span className="text-gray-300">{profile.specialization}</span>
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-[11px] tracking-wide text-gray-500 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900 hover:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToId("projects")}
                className="group inline-flex items-center gap-2 bg-gray-100 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                View projects
                <ArrowUp2
                  size="16"
                  variant="Linear"
                  className="rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-gray-100 transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Connect
              </button>
            </div>
          </div>

          <dl
            data-hero-entrance
            className="grid w-full grid-cols-2 gap-px border border-slate-800 bg-slate-800 opacity-0 lg:w-[420px]"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-950 p-4 transition-colors duration-300 hover:bg-slate-900"
              >
                <dd
                  data-count={stat.value}
                  className="text-3xl font-semibold tracking-tight text-gray-100 hover:text-accent"
                >
                  00
                </dd>

                <dt className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-gray-600">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("experience")}
        data-scroll-indicator
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-gray-300 sm:flex"
        aria-label="Scroll to experience"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown2 size="16" variant="Linear" />
      </button>
    </section>
  );
}

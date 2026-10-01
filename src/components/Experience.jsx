import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const experiences = [
  {
    company: "LabMu Yogyakarta",
    role: "Backend Developer — Internship",
    period: "Nov 2025 - Feb 2026",
    location: "Yogyakarta, Indonesia",
    summary:
      "Mengembangkan aplikasi berbasis web selama masa magang dengan berkontribusi pada pengembangan backend, perancangan API, pengelolaan database, dan optimalisasi sistem.",
    responsibilities: [
      "Merancang dan mengembangkan RESTful API untuk aplikasi web.",
      "Membangun dan memelihara skema serta query database.",
      "Mengimplementasikan sistem autentikasi dan otorisasi.",
      "Berkolaborasi dengan frontend developer untuk memastikan integrasi API berjalan dengan baik.",
    ],
    achievements: [
      "Berhasil merancang dan mengembangkan beberapa REST API yang digunakan oleh aplikasi frontend.",
      "Mengimplementasikan autentikasi yang aman menggunakan JWT dan role-based access control.",
      "Memperoleh pengalaman praktis dalam pengembangan agile dan kolaborasi dalam tim.",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Git"],
  },
  {
    company: "PT. Meta Visi Nusantara",
    role: "Technical Doumentation — Internship",
    period: "Okt 2024",
    location: "Magelang, Indonesia",
    summary:
      "Mengerjakan dokumentasi teknis selama masa magang dengan berkontribusi dalam pembuatan dokumentasi yang jelas dan komprehensif untuk proses serta sistem internal.",
    responsibilities: [
      "Membuat dan memelihara dokumentasi teknis untuk sistem internal.",
      "Berkolaborasi dengan tim pengembangan untuk mengumpulkan informasi yang diperlukan.",
      "Memastikan dokumentasi tetap jelas, ringkas, dan diperbarui secara berkala.",
    ],
    achievements: [
      "Berhasil menyelesaikan dokumentasi teknis yang komprehensif.",
      "Meningkatkan kejelasan dan kemudahan akses terhadap proses internal.",
      "Memperoleh pengalaman praktis dalam penulisan teknis dan standar dokumentasi.",
    ],
    tags: ["Technical Writing", "Documentation"],
  },
  {
    company: "Independent Projects",
    role: "Full-Stack Developer",
    period: "2022 — Present",
    location: "Indonesia",
    summary:
      "Mengembangkan berbagai produk digital dan proyek portfolio secara mandiri untuk mengeksplorasi teknologi frontend modern, interaction design, serta arsitektur aplikasi yang dapat dikembangkan secara berkelanjutan.",
    responsibilities: [
      "Merancang dan mengembangkan aplikasi frontend secara menyeluruh.",
      "Mengeksplorasi framework dan library JavaScript modern.",
      "Mengimplementasikan antarmuka yang responsif dan interaktif.",
      "Bereksperimen dengan pola animasi dan interaksi pada antarmuka.",
    ],
    achievements: [
      "Membangun berbagai aplikasi full-stack dan frontend.",
      "Mengembangkan sistem UI yang dapat digunakan kembali untuk proyek pribadi.",
      "Memperluas pengalaman dalam React, Node.js, database, dan API.",
    ],
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Git",
      "Supabase",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const heading = section.querySelectorAll("[data-experience-heading]");

    animate(heading, {
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 700,
      delay: stagger(100),
      ease: "outExpo",
    });

    const cards = section.querySelectorAll("[data-experience-card]");

    animate(cards, {
      opacity: [0, 1],
      translateY: [35, 0],
      duration: 750,
      delay: stagger(120, {
        start: 250,
      }),
      ease: "outExpo",
    });
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progress = progressRef.current;

    if (!timeline || !progress) return;

    let animation;

    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.7;
      const end = viewportHeight * 0.6;
      const total = rect.height - (start - end);
      const current = start - rect.top;

      let value = current / total;

      value = Math.max(0, Math.min(1, value));

      if (animation) {
        animation.pause();
      }

      animation = animate(progress, {
        scaleY: value,
        duration: 180,
        ease: "outQuad",
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);

      if (animation) {
        animation.pause();
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-800 bg-black py-24 sm:py-32"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div>
          <div
            data-experience-heading
            className="flex items-center gap-3 opacity-0"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
              01
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
              Journey
            </span>
          </div>

          <h2
            data-experience-heading
            className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-gray-100 opacity-0 sm:text-7xl lg:text-8xl"
          >
            Experience
          </h2>

          <p
            data-experience-heading
            className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 opacity-0"
          >
            Pengalaman saya dalam pengembangan produk melalui berbagai
            kolaborasi dengan tim.
          </p>
        </div>

        <ol ref={timelineRef} className="relative mt-16 ml-2 space-y-5 sm:ml-4">
          <div
            className="absolute top-0 bottom-0 left-0 w-px bg-slate-800"
            aria-hidden="true"
          />

          <div
            ref={progressRef}
            className="absolute top-0 bottom-0 left-0 w-px origin-top scale-y-0 bg-gray-400"
            aria-hidden="true"
          />

          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${index}`}
              data-experience-card
              className="group relative pl-7 opacity-0 sm:pl-10"
            >
              <span className="absolute top-8 -left-[4px] size-2 rotate-45 border border-slate-600 bg-black transition-all duration-300 group-hover:border-gray-300 group-hover:bg-gray-300" />

              <article className="relative overflow-hidden border border-slate-800 bg-slate-950 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-slate-600 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl">
                      {item.company}
                    </h3>

                    <p className="mt-1 font-mono text-xs tracking-wide text-accent">
                      {item.role}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {item.period}
                    </p>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      {item.location}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 max-w-3xl text-sm leading-7 text-white">
                  {item.summary}
                </p>

                <div className="relative mt-7 grid gap-8 border-t border-slate-800 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                      Responsibility
                    </p>

                    <ul className="mt-4 space-y-3">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-sm leading-relaxed text-white"
                        >
                          <span className="mt-2 h-px w-3 shrink-0 bg-slate-600" />

                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                      Achievement
                    </p>

                    <ul className="mt-4 space-y-3">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm leading-relaxed text-white"
                        >
                          <span className="mt-2 h-px w-3 shrink-0 bg-gray-400" />

                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative mt-7 flex flex-wrap gap-2 border-t border-slate-800 pt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-slate-800 bg-black px-2.5 py-1 font-mono text-[10px] tracking-wide text-gray-500 transition-colors duration-300 hover:border-slate-600 hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { ArrowUp2, Sms } from "iconsax-reactjs";

/* =====================================================
   CONTACT DATA
===================================================== */

const contactChannels = [
  {
    label: "Email",
    value: "Email",
    href: "mailto:akhmadoktariski@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com",
    href: "https://github.com/rizukiBoy",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/akhmad-okta-riski/",
  },
];

/* =====================================================
   CONTACT
===================================================== */

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    /* ==========================================
       HEADING
    ========================================== */

    const headingItems = headingRef.current?.querySelectorAll(
      "[data-contact-heading]",
    );

    if (headingItems) {
      animate(headingItems, {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 700,
        delay: stagger(100),
        ease: "outExpo",
      });
    }

    /* ==========================================
       CONTACT CARDS
    ========================================== */

    const cards = cardsRef.current?.querySelectorAll("[data-contact-card]");

    if (cards) {
      animate(cards, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        delay: stagger(100, {
          start: 300,
        }),
        ease: "outExpo",
      });
    }

    /* ==========================================
       CTA
    ========================================== */

    if (buttonRef.current) {
      animate(buttonRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 700,
        ease: "outExpo",
      });
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        border-t
        border-slate-800
        bg-slate-950
        py-24
        sm:py-32
      "
    >
      {/* ==========================================
          BACKGROUND GRID
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(148,163,184,0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(148,163,184,0.07) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ==========================================
          GRADIENT
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
        "
      >
        {/* ==========================================
            HEADING
        =========================================== */}

        <div ref={headingRef}>
          <div data-contact-heading className="opacity-0">
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.2em]
                  text-accent
                "
              >
                03
              </span>

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                "
              >
                Availability
              </span>
            </div>
          </div>

          <h2
            data-contact-heading
            className="
              mt-4
              max-w-5xl
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              text-gray-100
              opacity-0
              sm:text-7xl
              lg:text-8xl
            "
          >
            Let's build
            <br />
            something durable.
          </h2>

          <p
            data-contact-heading
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              opacity-0
            "
          >
            Currently available for new opportunities, collaborations, and
            interesting digital products. Based in Indonesia, working with teams
            across time zones.
          </p>
        </div>

        {/* ==========================================
            CONTACT CHANNELS
        =========================================== */}

        <div
          ref={cardsRef}
          className="
            mt-14
            grid
            gap-px
            border
            border-slate-800
            bg-slate-800
            sm:grid-cols-3
          "
        >
          {contactChannels.map((channel, index) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              data-contact-card
              className="
                  group
                  relative
                  flex
                  min-h-[160px]
                  items-center
                  justify-between
                  gap-5
                  overflow-hidden
                  bg-black
                  p-6
                  opacity-0
                  transition-colors
                  duration-500
                  hover:bg-slate-900
                  sm:p-7
                "
            >
              {/* CARD GRID */}

              <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                style={{
                  backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(148,163,184,0.08) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(148,163,184,0.08) 1px,
                        transparent 1px
                      )
                    `,
                  backgroundSize: "28px 28px",
                }}
              />

              {/* INDEX */}

              <span
                className="
                    absolute
                    right-5
                    top-4
                    font-mono
                    text-[9px]
                    tracking-[0.18em]
                    text-slate-800
                    transition-colors
                    duration-300
                    group-hover:text-slate-600
                  "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* CONTENT */}

              <span className="relative">
                <span
                  className="
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-slate-600
                    "
                >
                  {channel.label}
                </span>

                <span
                  className="
                      mt-3
                      block
                      break-all
                      text-lg
                      tracking-tight
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:text-gray-100
                      sm:text-xl
                    "
                >
                  {channel.value}
                </span>
              </span>

              {/* ICON */}

              <span
                className="
                    relative
                    flex
                    size-9
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-slate-800
                    text-gray-600
                    transition-all
                    duration-300
                    group-hover:border-slate-500
                    group-hover:bg-gray-100
                    group-hover:text-black
                  "
              >
                <ArrowUp2
                  size="15"
                  variant="Linear"
                  className="
                      rotate-45
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                />
              </span>
            </a>
          ))}
        </div>

        {/* ==========================================
            CTA
        =========================================== */}

        <div ref={buttonRef} className="mt-10 opacity-0">
          <a
            href="mailto:akhmadoktariski@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-3
              bg-gray-100
              px-7
              py-4
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
            "
          >
            <Sms
              size="16"
              variant="Linear"
              className="
                transition-transform
                duration-300
                group-hover:-rotate-6
              "
            />
            Start a conversation
            <ArrowUp2
              size="14"
              variant="Linear"
              className="
                rotate-45
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   FOOTER
===================================================== */

export function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    animate(footer, {
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600,
      ease: "outExpo",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="
        border-t
        border-slate-800
        bg-black
        py-8
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-wrap
          items-center
          justify-between
          gap-4
          px-5
          sm:px-8
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-gray-600
          "
        >
          © 2026 Your Name
        </span>

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-gray-700
          "
        >
          Built with React · Tailwind · Anime.js
        </span>
      </div>
    </footer>
  );
}

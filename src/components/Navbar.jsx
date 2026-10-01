import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { Menu, CloseSquare } from "iconsax-reactjs";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const profile = {
  name: "Rizuki.web",
};

function scrollToId(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const activeIndicatorRef = useRef(null);

  const menuAnimationRef = useRef(null);
  const indicatorAnimationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
      },
    );

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuAnimationRef.current) {
      menuAnimationRef.current.pause();
    }

    if (open) {
      menu.style.height = "auto";

      const height = menu.scrollHeight;

      menu.style.height = "0px";

      menuAnimationRef.current = animate(menu, {
        height,
        opacity: [0, 1],
        duration: 350,
        ease: "outCubic",
      });
    } else {
      menuAnimationRef.current = animate(menu, {
        height: 0,
        opacity: [1, 0],
        duration: 250,
        ease: "inCubic",
      });
    }

    return () => {
      if (menuAnimationRef.current) {
        menuAnimationRef.current.pause();
      }
    };
  }, [open]);

  useEffect(() => {
    const indicator = activeIndicatorRef.current;

    if (!indicator) return;

    if (indicatorAnimationRef.current) {
      indicatorAnimationRef.current.pause();
    }

    indicatorAnimationRef.current = animate(indicator, {
      opacity: [0, 1],
      scaleX: [0.5, 1],
      duration: 300,
      ease: "outExpo",
    });

    return () => {
      if (indicatorAnimationRef.current) {
        indicatorAnimationRef.current.pause();
      }
    };
  }, [active]);

  const handleNavigation = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-secondary transition-all duration-500">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "border-b border-neutral-700/60"
            : "border-b border-neutral-800/40"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNavigation("hero")}
          aria-label="Back to top"
          className="group flex items-center gap-3 text-left"
        >
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-sans text-sm font-semibold tracking-tight text-neutral-100">
              {profile.name}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={`relative px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-200"
                  }`}
                >
                  <span className="mr-2 text-[10px] text-neutral-600"></span>

                  {link.label}

                  {isActive && (
                    <span
                      ref={activeIndicatorRef}
                      className="absolute inset-x-3 -bottom-px h-px origin-center bg-neutral-300"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex size-9 items-center justify-center border border-slate-700 bg-black text-gray-300 transition-all duration-300 hover:border-slate-400 hover:text-white md:hidden"
        >
          {open ? (
            <CloseSquare size="18" variant="Linear" />
          ) : (
            <Menu size="18" variant="Linear" />
          )}
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="h-0 overflow-hidden border-b border-slate-800 bg-slate-950 md:hidden"
        style={{ opacity: 0 }}
      >
        <ul className="flex flex-col p-4">
          {navLinks.map((link, index) => {
            const isActive = active === link.id;

            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={`flex w-full items-center gap-3 border-b border-slate-800 py-3 text-left font-sans text-lg tracking-tight transition-colors duration-300 ${
                    isActive
                      ? "text-gray-100"
                      : "text-gray-500 hover:text-gray-200"
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

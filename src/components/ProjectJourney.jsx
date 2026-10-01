import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { CloseCircle, ArrowCircleDown } from "iconsax-reactjs";

export default function ProjectJourney({ project, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const modal = modalRef.current;
    const content = contentRef.current;

    if (!modal || !content) return;

    animate(modal, {
      opacity: [0, 1],
      duration: 300,
      ease: "outQuad",
    });

    animate(content, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 500,
      ease: "outExpo",
    });

    const items = content.querySelectorAll("[data-journey-item]");

    animate(items, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 500,
      delay: stagger(80, {
        start: 150,
      }),
      ease: "outExpo",
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const closeModal = () => {
    const modal = modalRef.current;
    const content = contentRef.current;

    if (!modal || !content) {
      onClose();
      return;
    }

    animate(content, {
      opacity: 0,
      translateY: 20,
      duration: 250,
      ease: "inQuad",
    });

    animate(modal, {
      opacity: 0,
      duration: 300,
      ease: "inQuad",
      onComplete: () => {
        onClose();
      },
    });
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-100 overflow-y-auto bg-black/90 p-5 backdrop-blur-md sm:p-8 lg:p-12"
      onClick={closeModal}
    >
      <div
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto min-h-full max-w-5xl border border-slate-800 bg-slate-950 opacity-0"
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
          backgroundSize: "36px 36px",
        }}
      >
        <div className="flex items-start justify-between gap-6 border-b border-slate-800 bg-slate-950/95 p-6 backdrop-blur-xl sm:p-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              {project.year}
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
              {project.name}
            </h2>

            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="flex size-10 shrink-0 items-center justify-center border border-slate-700 text-gray-500 transition-all duration-300 hover:border-gray-400 hover:text-gray-100"
          >
            <CloseCircle size="20" variant="Linear" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid gap-8">
            <div>
              <div className="mb-8 border-l border-slate-700 pl-5">
                <p className="text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>

              <div>
                {project.journey.map((item, index) => (
                  <div
                    key={item.title}
                    data-journey-item
                    className="border-t border-slate-800 py-7 opacity-0"
                  >
                    <div className="grid gap-5 sm:grid-cols-[100px_1fr]">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-100">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                          {item.desc || item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit border border-slate-800 bg-black p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Teknologi
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-slate-800 bg-slate-950 px-2 py-1 font-mono text-[10px] text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-px bg-slate-800">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-black p-3">
                    <div className="text-lg font-semibold text-white">
                      {metric.value}
                    </div>

                    <div className="mt-1 font-mono text-[8px] tracking-wider text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-6">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-accent px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-accent transition-all duration-300 hover:bg-gray-100 hover:border-gray-100 hover:text-black"
                  >
                    Live Demo
                    <ArrowCircleDown size="14" variant="Linear" />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

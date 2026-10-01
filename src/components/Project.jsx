import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight2, ArrowUp2 } from "iconsax-reactjs";

import registrasiGunung from "../assets/registrasi-gunung.png";
import portofolio from "../assets/portfolio.png";
import karirmu from "../assets/karirmu.png";
import justsend from "../assets/justsend.png";

import ProjectJourney from "./ProjectJourney";

const projects = [
  {
    id: 1,
    year: "2026",
    name: "Registrasi Pendakian Gunung",
    tagline: "Platform registrasi pendakian",
    image: registrasiGunung,
    demoUrl: "https://registrasi-gunung.vercel.app/",
    description:
      "Platform registrasi pendakian gunung berbasis digital yang dirancang untuk mempermudah proses pemesanan, pengelolaan kuota, verifikasi dokumen, dan operasional administrasi.",
    metrics: [
      { value: "04", label: "Tahapan" },
      { value: "03", label: "Peran" },
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Supabase"],
    journey: [
      {
        title: "Masalah",
        desc: "Proses registrasi pendakian secara manual dapat memerlukan pencatatan data, verifikasi dokumen, dan komunikasi berulang antara pendaki dan pihak pengelola gunung.",
      },
      {
        title: "Pendekatan",
        desc: "Platform disusun menggunakan alur pemesanan bertahap yang memisahkan pemilihan jadwal, anggota kelompok, dokumen, dan pembayaran ke dalam tahapan yang jelas.",
      },
      {
        title: "Arsitektur",
        desc: "Sistem menerapkan arsitektur berbasis peran dengan frontend berbasis komponen dan backend yang terstruktur. React digunakan untuk mengorganisasi antarmuka menjadi komponen yang dapat digunakan kembali serta service layer untuk logika bisnis dan komunikasi dengan backend.",
      },
      {
        title: "Hasil",
        desc: "Sistem yang dihasilkan menyediakan pengalaman registrasi terpusat bagi pendaki sekaligus memberikan visibilitas yang lebih baik kepada administrator terhadap pemesanan dan penggunaan kuota.",
      },
    ],
  },

  {
    id: 2,
    year: "2025",
    name: "KarirMu",
    tagline: "Platform karier dalam ekosistem Muhammadiyah",
    image: karirmu,
    description:
      "Platform karier berbasis web yang dirancang untuk menghubungkan pencari kerja dengan peluang pekerjaan di lingkungan Muhammadiyah. Platform ini mengatur pencarian pekerjaan, pengelolaan rekrutmen, dan proses verifikasi institusi.",
    metrics: [
      { value: "3", label: "Peran" },
      { value: "AUM", label: "Ekosistem" },
    ],
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    journey: [
      {
        title: "Eksplorasi",
        desc: "Proyek dimulai dengan mengidentifikasi kebutuhan akan platform karier terpusat dalam ekosistem Muhammadiyah. Tantangan utamanya adalah mengorganisasi peluang kerja dari berbagai institusi AUM sekaligus memberikan cara yang sederhana dan terstruktur bagi pencari kerja untuk menemukan serta melamar posisi yang relevan.",
      },
      {
        title: "Peran & Alur",
        desc: "Platform disusun berdasarkan tiga peran utama: User, Superadmin, dan AUM. User dapat mengeksplorasi peluang kerja dan mengelola lamaran, institusi AUM dapat mengelola profil perusahaan serta mempublikasikan peluang rekrutmen, sedangkan Superadmin bertanggung jawab atas verifikasi institusi dan administrasi tingkat platform.",
      },
      {
        title: "Antarmuka",
        desc: "Antarmuka dirancang untuk mendukung alur kerja yang berbeda pada setiap peran dengan tetap mempertahankan sistem visual yang konsisten. Layout responsif, hierarki informasi yang jelas, komponen yang dapat digunakan kembali, dan navigasi berdasarkan peran digunakan untuk mempermudah proses rekrutmen dan administrasi.",
      },
      {
        title: "Pengembangan",
        desc: "Frontend dikembangkan menggunakan React dan dipisahkan menjadi komponen yang dapat digunakan kembali serta service layer untuk komunikasi API. Backend dibangun menggunakan Node.js dan Express dengan arsitektur berbasis peran, sedangkan MongoDB digunakan untuk mengelola pengguna, institusi AUM, informasi perusahaan, lowongan pekerjaan, lamaran, dan data rekrutmen terkait.",
      },
      {
        title: "Verifikasi",
        desc: "Institusi AUM melalui proses verifikasi administratif sebelum aktivitas rekrutmen mereka tersedia sepenuhnya di platform. Superadmin meninjau informasi institusi dan dokumen pendukung yang dikirimkan sehingga terbentuk alur yang terkontrol antara registrasi, verifikasi, dan publikasi lowongan.",
      },
      {
        title: "Hasil",
        desc: "KarirMu menyediakan fondasi digital yang terstruktur untuk pencarian karier dan proses rekrutmen dalam ekosistem Muhammadiyah. Dengan memisahkan tanggung jawab antara User, AUM, dan Superadmin, platform membentuk alur yang lebih jelas untuk pencarian pekerjaan, pengelolaan institusi, verifikasi, dan administrasi rekrutmen.",
      },
    ],
  },

  {
    id: 3,
    year: "2026",
    name: "JustSend",
    tagline: "Kirim file dengan sederhana",
    image: justsend,
    description:
      "Platform berbagi file dan teks secara peer-to-peer yang memungkinkan pengguna mentransfer data secara langsung antarperangkat melalui antarmuka berbasis browser.",
    metrics: [
      { value: "P2P", label: "Transfer" },
      { value: "Simple", label: "Mudah digunakan" },
    ],
    stack: ["React", "JavaScript", "PeerJS", "WebRTC"],
    journey: [
      {
        title: "Masalah",
        desc: "Mengirim file antarperangkat yang berdekatan sering kali membutuhkan cloud storage, aplikasi pesan, atau pertukaran link secara manual sebelum proses transfer dapat dimulai.",
      },
      {
        title: "Koneksi",
        desc: "JustSend membuat koneksi peer-to-peer antarperangkat menggunakan PeerJS sehingga pengguna dapat terhubung secara langsung melalui sesi berbasis browser.",
      },
      {
        title: "Transfer",
        desc: "Teks dan file ditransfer secara langsung antar peer yang terhubung tanpa perlu mengunggah data ke layanan penyimpanan terpusat.",
      },
      {
        title: "Hasil",
        desc: "JustSend menyediakan pengalaman berbasis browser yang sederhana untuk berbagi teks dan file dengan cepat antarperangkat melalui koneksi peer-to-peer secara langsung.",
      },
    ],
  },

  {
    id: 4,
    year: "2026",
    name: "Portfolio",
    tagline: "Pengalaman digital personal",
    image: portofolio,
    description:
      "Portfolio minimalis yang berfokus pada penyajian proyek, pengalaman, kemampuan teknis, dan perjalanan pengembangan melalui antarmuka yang interaktif.",
    metrics: [
      { value: "04", label: "Bagian" },
      { value: "08", label: "Komponen" },
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Anime.js", "CSS"],
    journey: [
      {
        title: "Konsep",
        desc: "Arah visual menggabungkan antarmuka bergaya industrial dengan palet grayscale yang sederhana untuk menjaga perhatian tetap terarah pada konten dan interaksi.",
      },
      {
        title: "Sistem",
        desc: "Komponen yang dapat digunakan kembali, spacing, tipografi, border, dan pola interaksi yang konsisten menjadi fondasi utama antarmuka.",
      },
      {
        title: "Interaksi",
        desc: "Anime.js digunakan untuk memberikan animasi entrance yang ringan, counter, transisi, serta micro-interaction yang sederhana.",
      },
      {
        title: "Hasil",
        desc: "Portfolio menyampaikan kemampuan teknis sekaligus mempertahankan identitas visual yang bersih dan sangat terstruktur.",
      },
    ],
  },
];

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    animate(card, {
      opacity: [0, 1],
      translateY: [35, 0],
      duration: 700,
      delay: index * 80,
      ease: "outExpo",
    });
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="group min-w-0 flex-[0_0_88%] opacity-0 sm:flex-[0_0_60%] lg:flex-[0_0_42%]"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative flex h-full w-full flex-col overflow-hidden border border-slate-800 bg-slate-950 p-6 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-600 sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
              {String(index + 1).padStart(2, "0")} / {project.year}
            </span>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl">
              {project.name}
            </h3>

            <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-accent">
              {project.tagline}
            </p>
          </div>

          <span className="flex size-9 shrink-0 items-center justify-center border border-slate-800 text-gray-500 transition-all duration-300 group-hover:border-gray-500 group-hover:bg-gray-100 group-hover:text-black">
            <ArrowUp2 size="16" variant="Linear" className="rotate-45" />
          </span>
        </div>

        <div className="relative mt-6 flex h-28 items-end gap-1 overflow-hidden rounded border border-slate-800 bg-black">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="relative mt-6 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        <dl className="relative mt-6 grid grid-cols-2 gap-px bg-slate-800">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-slate-950 p-3 transition-colors duration-300 group-hover:bg-slate-900"
            >
              <dd className="text-xl font-semibold text-accent">
                {metric.value}
              </dd>

              <dt className="mt-1 font-mono text-[9px] tracking-wider text-white">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="border border-slate-800 px-2 py-1 font-mono text-[9px] tracking-wide text-gray-600 transition-colors duration-300 group-hover:text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="relative mt-6 flex items-center gap-2 border-t border-slate-800 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
          Lihat detail
          <ArrowRight2
            size="14"
            variant="Linear"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </button>
    </article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-project-heading]");

    animate(elements, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      delay: stagger(100),
      ease: "outExpo",
    });
  }, []);

  return (
    <>
      <section
        id="projects"
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
          className="pointer-events-none absolute inset-x-0 top-0 h-10 opacity-30"
          style={{
            backgroundImage: `
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 8px,
              rgba(148,163,184,0.15) 8px,
              rgba(148,163,184,0.15) 9px
            )
          `,
          }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-project-heading className="opacity-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                02
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Selected Projects
              </span>
            </div>

            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-gray-100 sm:text-7xl">
              Projects
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
              Mari lihat perjalanan saya dalam membangun website.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectJourney
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}

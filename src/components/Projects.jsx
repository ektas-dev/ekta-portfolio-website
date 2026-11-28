
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Taskly",
    type: "Full-Stack Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Dashboard interface representing Taskly",
    description:
      "A full-stack task management application with drag-and-drop boards, JWT authentication and role-based access.",
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
    ],
    github: "https://github.com/ektas-dev",
    live: null,
  },
  {
    name: "Attendance Tracker",
    type: "Android Application",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Smartphone representing Attendance Tracker",
    description:
      "An Android attendance system using QR codes and geolocation, with separate student, faculty and admin modules.",
    technologies: [
      "Java",
      "Android",
      "XML",
      "Firebase",
      "QR Code",
      "Geolocation",
    ],
    github: "https://github.com/ektas-dev",
    live: null,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="theme-card theme-border group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-900/10"
    >
      {/* Project preview */}
      <div className="relative h-44 overflow-hidden bg-violet-950/20 sm:h-48">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {project.type}
        </span>

        <ArrowUpRight
          size={19}
          className="absolute bottom-4 right-4 text-white"
        />
      </div>

      {/* Project information */}
      <div className="flex flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold theme-text">
          {project.name}
        </h3>

        <p className="theme-muted mt-2 min-h-[48px] text-sm leading-6">
          {project.description}
        </p>

        {/* Technology badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border theme-border bg-violet-500/[0.06] px-2.5 py-1.5 text-[11px] font-medium theme-text"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project actions */}
        <div className="mt-5 flex items-center gap-3 border-t theme-border pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border theme-border px-3 py-2.5 text-xs font-semibold theme-text transition-all hover:border-violet-400/50 hover:bg-violet-500/10"
          >
            <FaGithub size={16} />
            Source Code
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          ) : (
            <span className="flex-1 rounded-lg border theme-border px-3 py-2.5 text-center text-xs theme-muted">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="theme-bg relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                Featured work
              </p>
            </div>

            <h2 className="font-display text-4xl font-bold theme-text sm:text-5xl">
              Selected{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/ektas-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Project gallery */}
        <div className="grid items-start gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

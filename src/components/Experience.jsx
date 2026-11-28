
import { motion } from "motion/react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Full-Stack Developer",
    organization: "Independent Development · Taskly",
    period: "APR 2026 — PRESENT",
    description:
      "Developing a full-stack task management application using React, Java, Spring Boot and PostgreSQL, with JWT authentication and REST APIs.",
  },
  {
    role: "Career Development & Technical Upskilling",
    organization: "Professional Development",
    period: "2022 — 2026",
    description:
      "Pursued an MBA through IGNOU while preparing for competitive examinations. Resumed focused software development preparation in 2026.",
  },
  {
    role: "Software Analyst",
    organization: "Capgemini",
    period: "OCT 2020 — APR 2022",
    description:
      "Worked on Java-based enterprise applications, enhancements, debugging and defect resolution.",
  },
];

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    performance: "Academic Average: 4.09 / 5.00",
    period: "2023 — PRESENT",
    note: "Project result awaited",
  },
  {
    degree: "Bachelor of Science (Information Technology)",
    institution: "Jai Hind College, Mumbai",
    performance: "CGPA: 9.55 / 10",
    period: "2017 — 2020",
  },
];

function ExperienceItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ x: 6 }}
      className="group border-l-2 border-white/10 py-1 pl-5 transition-all duration-300 hover:border-violet-400 sm:pl-7"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h3 className="text-lg font-semibold theme-text transition-colors duration-300 group-hover:text-violet-400 sm:text-xl">
          {item.role}
        </h3>

        <span className="shrink-0 text-[11px] font-semibold tracking-wider text-violet-400">
          {item.period}
        </span>
      </div>

      <p className="mt-1 text-sm theme-muted">
        {item.organization}
      </p>

      <p className="mt-2 max-w-3xl text-sm leading-6 theme-muted">
        {item.description}
      </p>
    </motion.article>
  );
}

function EducationItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
      className="group flex flex-col gap-2 border-b theme-border py-5 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
    >
      <div className="flex min-w-0 gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500/20">
          <GraduationCap size={21} />
        </div>

        <div className="min-w-0">
          <h4 className="text-base font-semibold leading-snug theme-text transition-colors duration-300 group-hover:text-violet-400 sm:text-lg">
            {item.degree}
          </h4>

          <p className="mt-1 text-sm theme-muted">
            {item.institution}
          </p>

          <p className="mt-2 text-sm font-medium theme-text">
            {item.performance}
          </p>

          {item.note && (
            <p className="mt-1 text-xs theme-subtle">
              {item.note}
            </p>
          )}
        </div>
      </div>

      <span className="shrink-0 pl-14 text-xs font-semibold tracking-wider text-violet-400 sm:pl-0 sm:pt-2">
        {item.period}
      </span>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="theme-bg scroll-mt-28 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight theme-text sm:text-4xl">
            Experience <span className="text-violet-400">&</span> Education
          </h2>
        </motion.div>

        {/* Experience */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <BriefcaseBusiness size={19} className="text-violet-400" />
            <h3 className="text-xl font-semibold theme-text">
              Experience
            </h3>
          </div>

          <div className="space-y-7">
            {experience.map((item, index) => (
              <ExperienceItem
                key={item.role}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-14 border-t theme-border pt-10">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={21} className="text-violet-400" />
            <h3 className="text-xl font-semibold theme-text">
              Education
            </h3>
          </div>

          <div>
            {education.map((item, index) => (
              <EducationItem
                key={item.degree}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

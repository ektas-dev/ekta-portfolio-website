import { motion } from "motion/react";
import { Server, Monitor, Database, Wrench, ArrowUpRight } from "lucide-react";

import { FaDatabase, FaJava, FaCss3Alt } from "react-icons/fa6";

import {
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiPostman,
  SiSwagger,
  SiEclipseide,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    accent: "from-violet-500/20 to-purple-500/5",
    skills: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring Security", text: "SS", color: "#6DB33F" },
      { name: "REST APIs", text: "API", color: "#A78BFA" },
      { name: "JPA", text: "JPA", color: "#A78BFA" },
      { name: "Hibernate", text: "H", color: "#BCA67A" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    accent: "from-cyan-500/15 to-violet-500/5",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-emerald-500/15 to-violet-500/5",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle", icon: FaDatabase, color: "#F80000" },
      { name: "SQL", text: "SQL", color: "#A78BFA" },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    accent: "from-fuchsia-500/15 to-violet-500/5",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#BDBDBD" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
      { name: "JUnit", text: "J", color: "#25A162" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "STS", text: "STS", color: "#6DB33F" },
    ],
  },
];

function SkillItem({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="group/skill flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-white/[0.035] px-3 py-3 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-500/10"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        {Icon ? (
          <Icon size={22} style={{ color: skill.color }} />
        ) : (
          <span className="text-sm font-bold" style={{ color: skill.color }}>
            {skill.text}
          </span>
        )}
      </span>

      <span className="truncate text-sm font-medium theme-text">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="theme-bg relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              What I work with
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-display text-4xl font-bold theme-text sm:text-5xl lg:text-6xl">
              My Technical
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Arsenal.
              </span>
            </h2>

            <p className="theme-muted max-w-md text-sm leading-7 sm:text-base">
              The technologies, tools and frameworks I use to build functional,
              reliable and user-friendly applications.
            </p>
          </div>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid items-start gap-5 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="theme-card theme-border group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-900/10 sm:p-7"
              >
                {/* Card decoration */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-gradient-to-br ${category.accent} blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  {/* Category heading */}
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        <CategoryIcon size={22} />
                      </div>

                      <h3 className="font-display text-lg font-bold theme-text sm:text-xl">
                        {category.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-violet-400/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                    />
                  </div>

                  {/* Technology grid */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <div className="mb-4 h-px w-20 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <p className="font-display text-lg font-medium theme-text">
            Always learning. Always building.
          </p>

          <p className="theme-muted mt-2 text-sm">
            Focused on becoming a better developer with every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

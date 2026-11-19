
import { motion } from "motion/react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Spring Security",
      "JWT",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "Git",
      "GitHub",
      "Postman",
      "Swagger / OpenAPI",
      "JUnit",
      "Eclipse",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <main className="px-6 pb-24 pt-28 sm:px-10 lg:px-16 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* PAGE INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Technical skills
          </p>

          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Technologies I work with.
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My technical toolkit for building full-stack web applications,
            from frontend interfaces to backend services and databases.
          </p>
        </motion.div>

        {/* SKILL GROUPS */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.section
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#13131d] p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={21} />
                  </div>

                  <h2 className="font-display text-xl font-semibold text-white">
                    {group.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/40 hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

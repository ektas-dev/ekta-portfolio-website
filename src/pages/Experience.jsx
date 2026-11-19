
import { motion } from "motion/react";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experience = {
  role: "Software Analyst",
  company: "Capgemini",
  period: "October 2020 – April 2022",
  duration: "1 year 7 months",
  description:
    "Worked in a professional software development environment, gaining experience with Java-based development and related technologies.",
  technologies: [
    "Java",
    "Spring Boot",
    "Seedstack",
    "JavaScript",
    "Oracle",
    "MySQL",
  ],
};

export default function Experience() {
  return (
    <main className="px-6 pb-24 pt-28 sm:px-10 lg:px-16 lg:pt-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Experience
          </p>

          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            My professional journey.
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            My professional experience in software development and the
            technologies I've worked with.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#13131d] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <BriefcaseBusiness size={23} />
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-white">
                  {experience.role}
                </h2>
                <p className="mt-1 text-lg text-violet-300">
                  {experience.company}
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400">
              {experience.duration}
            </span>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={17} className="text-cyan-400" />
            {experience.period}
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            {experience.description}
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}

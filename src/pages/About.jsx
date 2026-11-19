import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    label: "Professional experience",
    title: "Capgemini",
    description: "Software Analyst · Oct 2020 – Apr 2022",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "B.Sc. Information Technology",
    description: "Jai Hind College · CGPA 9.55",
  },
  {
    icon: Code2,
    label: "Current focus",
    title: "Java Full-Stack Development",
    description: "Java · Spring Boot · React · PostgreSQL",
  },
];

export default function About() {
  return (
    <main className="px-6 pb-24 pt-28 sm:px-10 lg:px-16 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* INTRODUCTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            About me
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm Ekta.
            <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              A Java Full-Stack Developer.
            </span>
          </h1>

          <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I have a background in Information Technology and professional
              experience as a Software Analyst at Capgemini, where I worked with
              Java, Spring Boot, JavaScript, Oracle, MySQL, and Seedstack.
            </p>

            <p>
              I'm currently focused on building full-stack web applications
              using Java, Spring Boot, React, and PostgreSQL. I enjoy developing
              REST APIs, implementing backend logic, and creating user-friendly
              interfaces.
            </p>
          </div>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Explore my projects
            <ArrowRight size={18} />
          </Link>
        </motion.section>

        {/* PROFESSIONAL SNAPSHOT */}
        <section className="mt-24">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Professional snapshot
            </h2>
            <p className="mt-2 text-slate-400">
              A quick overview of my background and current direction.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#13131d] p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={21} />
                  </div>

                  <p className="text-sm text-violet-300">{item.label}</p>

                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

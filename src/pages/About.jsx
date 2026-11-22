import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

const strengths = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces with React, JavaScript, HTML and CSS.",
  },
  {
    icon: Layers3,
    title: "Backend Development",
    description:
      "Developing REST APIs and application logic using Java, Spring Boot and related technologies.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Working with relational databases, SQL, PostgreSQL, MySQL and JPA/Hibernate.",
  },
];

const journey = [
  {
    period: "2017 – 2020",
    title: "B.Sc. Information Technology",
    organization: "Jai Hind College, Mumbai",
    detail: "Graduated with a CGPA of 9.55.",
    icon: GraduationCap,
  },
  {
    period: "Oct 2020 – Apr 2022",
    title: "Software Analyst",
    organization: "Capgemini",
    detail:
      "Professional experience working with Java, Spring Boot, JavaScript, Oracle and MySQL.",
    icon: BriefcaseBusiness,
  },
  {
    period: "2023 – 2025",
    title: "MBA Studies",
    organization: "IGNOU",
    detail: "Pursued management studies alongside my interest in technology.",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <main className="overflow-hidden bg-[#09090f] text-white">
      {/* INTRODUCTION */}
      <section className="relative px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* PROFILE ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/images/ekta-avatar.jpeg"
                alt="Illustration of a developer working on a laptop"
                className="mx-auto max-h-[480px] w-full object-contain drop-shadow-[0_20px_45px_rgba(139,92,246,0.18)]"
              />
            </motion.div>

            <div className="absolute bottom-8 left-0 rounded-xl border border-violet-400/20 bg-[#151321]/90 px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs text-slate-400">Currently focused on</p>
              <p className="mt-1 text-sm font-semibold text-violet-300">
                Java Full-Stack Development
              </p>
            </div>
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400"
            >
              Get to know me
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              About{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl"
            >
              Java Full-Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-8 text-slate-400"
            >
              I'm a software developer interested in building practical,
              reliable and user-friendly web applications. I work across
              frontend and backend development, with a focus on Java, Spring
              Boot, React and relational databases.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-8 text-slate-400"
            >
              With professional experience at Capgemini and hands-on experience
              building full-stack projects independently, I'm continuing to
              strengthen my engineering skills and create applications that
              solve real problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
              >
                View My Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/10"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL STRENGTHS */}
      <section className="border-y border-white/5 bg-[#0e0d16] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What I work with
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              My Technical Focus
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              My development work brings together frontend interfaces, backend
              functionality and database integration.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-[#15131f] p-7 transition-colors hover:border-violet-400/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-7 text-right">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
            >
              Explore all skills
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              My background
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A little about my journey
            </h2>
          </motion.div>

          <div className="relative space-y-6">
            <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent sm:left-6" />

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex gap-5 sm:gap-7"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-[#171322] text-violet-300 sm:h-12 sm:w-12">
                    <Icon size={19} />
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-[#13121b] p-5 sm:p-7">
                    <p className="text-sm font-semibold text-cyan-400">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-violet-300">
                      {item.organization}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-right">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
            >
              View professional experience
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    value: "1.5+ Years",
    label: "Industry Experience",
  },
  {
    icon: Code2,
    value: "Full Stack",
    label: "Development Focus",
  },
  {
    icon: GraduationCap,
    value: "Continuous",
    label: "Learning & Growth",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="theme-bg relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Get to know me
          </p>

          <h2 className="font-display text-3xl font-bold theme-text sm:text-4xl lg:text-5xl">
            More than just <span className="text-violet-400">code.</span>
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-bold theme-text sm:text-3xl">
              Hello, I'm Ekta Sollet.
            </h3>

            <p className="mt-6 text-lg font-medium leading-8 text-violet-400">
              A software professional passionate about building meaningful
              digital experiences.
            </p>

            <div className="theme-muted mt-5 space-y-5 text-sm leading-8 sm:text-base">
              <p>
                My professional journey began at Capgemini, where I worked
                as a Software Analyst for approximately 1.5 years. This
                experience gave me exposure to software development,
                application enhancements, debugging and working with
                business applications.
              </p>

              <p>
                I'm now focused on growing as a Java Full-Stack Developer.
                I enjoy working across the development process — from
                designing backend logic and REST APIs to building
                responsive interfaces.
              </p>

              <p>
                I believe in learning by building. Through hands-on
                projects and continuous practice, I'm strengthening
                my technical foundation and preparing to contribute
                to real-world development teams.
              </p>
            </div>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Explore my work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* RIGHT: PROFILE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[80px]" />

            <div className="theme-card theme-border relative overflow-hidden rounded-3xl border p-5 shadow-2xl sm:p-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                    A little about me
                  </span>

                  <Code2 size={20} className="text-violet-400" />
                </div>

                <div className="overflow-hidden rounded-2xl bg-violet-500/5">
                  <motion.img
                    src="/images/ekta-avatar.jpeg"
                    alt="Illustration of Ekta working on a laptop"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto h-72 w-full object-contain sm:h-80"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-xl font-bold theme-text">
                    Building. Learning. Growing.
                  </h3>

                  <p className="theme-muted mt-2 text-sm leading-7">
                    Turning ideas into functional and user-friendly
                    applications, one project at a time.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "React", "PostgreSQL"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PROFESSIONAL HIGHLIGHTS */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="theme-card theme-border rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <Icon size={23} className="mb-5 text-violet-400" />

                <h4 className="font-display text-xl font-bold theme-text">
                  {item.value}
                </h4>

                <p className="theme-muted mt-2 text-sm">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

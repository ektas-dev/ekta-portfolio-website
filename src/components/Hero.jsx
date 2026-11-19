import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ektas-dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ekta-s-72b880236/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ektasollet12@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#09090f] px-6 pb-20 pt-32 sm:px-10 lg:min-h-screen lg:px-16">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="order-1 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            Java Full-Stack Developer
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I'm
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Ekta Sollet
            </span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 font-display text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            I build web applications.
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 lg:mx-0"
          >
            I develop full-stack applications using Java, Spring Boot and React,
            combining backend functionality with clean, user-friendly
            interfaces.
          </motion.p>

          {/* TECHNOLOGY LABELS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {["Java", "Spring Boot", "React", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1.5 text-xs font-medium text-violet-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-500/30"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Connect
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isEmail = social.label === "Email";

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl text-slate-400 transition-colors hover:text-violet-300"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT: CHARACTER ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="order-2 relative mx-auto flex w-full max-w-md items-center justify-center lg:order-2 lg:max-w-none"
        >
          {/* PURPLE CIRCLE GLOW */}
          <div className="absolute h-[75%] w-[75%] rounded-full bg-violet-600/20 blur-[80px]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full"
          >
            <img
              src="/images/ekta-avatar.jpeg"
              alt="Illustration of Ekta working on a laptop"
              className="mx-auto max-h-[540px] w-full object-contain drop-shadow-[0_20px_45px_rgba(139,92,246,0.2)]"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* FLOATING TECH LABELS */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-0 top-12 z-20 rounded-xl border border-violet-400/20 bg-[#151321]/90 px-4 py-2 text-sm font-semibold text-violet-300 shadow-xl backdrop-blur-md"
          >
            {"</>"} Java
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-16 left-0 z-20 rounded-xl border border-violet-400/20 bg-[#151321]/90 px-4 py-2 text-sm font-semibold text-violet-300 shadow-xl backdrop-blur-md"
          >
            React ✦
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

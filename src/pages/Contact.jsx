import { motion } from "motion/react";
import { Mail, ArrowUpRight, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME",
    icon: FaLinkedin,
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
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <main className="relative min-h-[85vh] overflow-hidden bg-[#080d1b] px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pt-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

      <motion.div
        className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-4 py-2 text-sm text-orange-300"
          >
            <Sparkles size={15} />
            Let's connect
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Have an opportunity
            <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              in mind?
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I'm open to junior software developer and Java Full-Stack
            opportunities. If you think my skills could be a good fit for your
            team, I'd love to hear from you.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="mailto:YOUR_EMAIL@example.com"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-shadow hover:shadow-orange-500/40"
          >
            <Mail size={19} />
            Say Hello
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Find me online
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-300"
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTACT CARD */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-500">contact.js</span>
            </div>

            <div className="font-mono text-sm leading-8">
              <p className="text-slate-500">
                <span className="text-orange-400">const</span> contact = {"{"}
              </p>

              <div className="space-y-3 pl-5">
                <p>
                  <span className="text-cyan-300">role:</span>{" "}
                  <span className="text-emerald-300">
                    "Java Full-Stack Developer"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-cyan-300">interestedIn:</span>{" "}
                  <span className="text-emerald-300">"New opportunities"</span>,
                </p>

                <p>
                  <span className="text-cyan-300">collaboration:</span>{" "}
                  <span className="text-emerald-300">true</span>
                </p>
              </div>

              <p className="text-slate-500">{"};"}</p>
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300">
                  <Send size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Start a conversation
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    I'd be happy to connect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating decorative element */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-[#111827] text-orange-300 shadow-xl sm:-right-5"
          >
            <Mail size={23} />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}

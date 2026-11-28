
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "ektasollet12@gmail.com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ektas-dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ekta-s-72b880236/",
    icon: FaLinkedin,
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hello Ekta,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="theme-bg scroll-mt-28 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
            Let's start a <span className="text-violet-400">conversation.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 theme-muted sm:text-base">
            Have an opportunity, a project idea, or simply want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main contact layout */}
        <div className="grid overflow-hidden rounded-2xl border theme-border lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex flex-col justify-between overflow-hidden bg-violet-500/[0.07] p-7 sm:p-10"
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400">
                <Sparkles size={13} />
                Open to opportunities
              </div>

              <h3 className="max-w-sm text-2xl font-semibold leading-snug theme-text sm:text-3xl">
                Have something in mind?
                <span className="mt-1 block text-violet-400">
                  Let's connect!
                </span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 theme-muted">
                I'm interested in junior Java developer and full-stack
                opportunities, as well as meaningful collaborations.
              </p>
            </div>

            {/* Illustration */}
            <motion.div
              whileHover={{ y: -6, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="relative z-10 mx-auto my-8 flex w-full max-w-[290px] items-center justify-center"
            >
              <img
                src="/images/ekta-avatar.jpeg"
                alt="Developer illustration"
                className="h-64 w-full object-contain drop-shadow-[0_15px_30px_rgba(139,92,246,0.18)]"
              />
            </motion.div>

            {/* Direct contact */}
            <div className="relative z-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest theme-subtle">
                Reach me directly
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex max-w-full items-center gap-2 text-sm font-medium theme-text transition-colors hover:text-violet-400"
              >
                <Mail size={17} className="shrink-0 text-violet-400" />
                <span className="break-all">{EMAIL}</span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-card theme-text transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-400"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="theme-card p-7 sm:p-10"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold theme-text">
                Send me a message
              </h3>
              <p className="mt-2 text-sm theme-muted">
                Fill in the details below and let's talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium theme-text"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border theme-border bg-transparent px-4 py-3 text-sm theme-text outline-none transition-all placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium theme-text"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border theme-border bg-transparent px-4 py-3 text-sm theme-text outline-none transition-all placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium theme-text"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-lg border theme-border bg-transparent px-4 py-3 text-sm theme-text outline-none transition-all placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium theme-text"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border theme-border bg-transparent px-4 py-3 text-sm theme-text outline-none transition-all placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500 sm:w-auto"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

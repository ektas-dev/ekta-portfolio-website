import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: FaLinkedin,
  },
];

function ContactCTA() {
  return (
    <section className="px-6 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl
          border border-violet-400/20
          bg-gradient-to-br from-[#171329] via-[#13131d] to-[#101923]
          px-7 py-16 sm:px-14 sm:py-20 text-center"
        >
          {/* Decorative Background */}
          <div
            className="absolute -top-32 -right-20
          w-80 h-80 bg-violet-600/20
          blur-[100px] rounded-full"
          />

          <div
            className="absolute -bottom-32 -left-20
          w-80 h-80 bg-cyan-500/10
          blur-[100px] rounded-full"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-violet-500/10 border border-violet-400/20
            text-violet-300 text-sm mb-7"
            >
              <Sparkles size={15} />
              Let's Connect
            </div>

            <h2
              className="text-3xl sm:text-5xl
            font-bold leading-tight text-white"
            >
              Let's Build Something
              <span
                className="block mt-2 text-transparent
              bg-clip-text bg-gradient-to-r
              from-violet-400 to-cyan-400"
              >
                Together.
              </span>
            </h2>

            <p
              className="text-gray-400 leading-relaxed
            mt-7 max-w-xl mx-auto"
            >
              I'm open to exploring software development opportunities and
              connecting with people who are passionate about technology and
              building meaningful products.
            </p>

            {/* Email Button */}
            <a
              href="mailto:YOUR_EMAIL"
              className="inline-flex items-center gap-3
              mt-9 px-7 py-4 rounded-xl
              bg-violet-600 hover:bg-violet-500
              text-white font-medium
              shadow-lg shadow-violet-600/20
              hover:-translate-y-1
              transition-all duration-300"
            >
              <Mail size={19} />
              Get In Touch
              <ArrowUpRight size={18} />
            </a>

            {/* Social Links */}
            <div
              className="flex justify-center
            items-center gap-5 mt-10"
            >
              <span className="text-gray-500 text-sm">Find me on</span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 rounded-xl
                    border border-white/10
                    text-gray-400
                    hover:text-violet-400
                    hover:border-violet-400/40
                    hover:bg-white/5
                    transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;

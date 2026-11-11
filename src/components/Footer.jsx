
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090f] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-violet-400"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-violet-400"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="mailto:YOUR_EMAIL"
            aria-label="Email"
            className="text-gray-400 hover:text-violet-400"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

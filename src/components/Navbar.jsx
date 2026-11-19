import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-violet-400" : "text-slate-300 hover:text-violet-300"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0d0b18]/85 px-5 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-7">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
          aria-label="Ekta - Home"
        >
          <span className="text-2xl font-bold tracking-tight text-violet-400">
            {"</>"}
          </span>
          <span className="font-display text-xl font-bold text-white">
            Ekta<span className="text-violet-400">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 lg:inline-flex"
        >
          <Download size={16} />
          Download CV
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-violet-400/50 hover:text-violet-300 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#11101d]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-violet-500/10 text-violet-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-violet-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

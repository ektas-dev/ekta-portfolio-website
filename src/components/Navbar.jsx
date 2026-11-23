
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, toggleTheme } = useTheme();

  // Track the section based on its actual scroll position
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const activationPoint = window.scrollY + 160;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= activationPoint) {
          currentSection = item.id;
        }
      });

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border theme-border theme-navbar px-5 py-3 shadow-xl backdrop-blur-xl sm:px-7">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-2"
          aria-label="Ekta - Home"
        >
          <span className="text-2xl font-bold text-violet-500">
            {"</>"}
          </span>
          <span className="font-display text-xl font-bold theme-text">
            Ekta<span className="text-violet-500">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-violet-500"
                  : "theme-muted hover:text-violet-400"
              }`}
            >
              {item.label}

              <motion.span
                initial={false}
                animate={{
                  scaleX: activeSection === item.id ? 1 : 0,
                  opacity: activeSection === item.id ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-violet-500"
              />
            </button>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-card theme-text transition hover:-translate-y-1 hover:border-violet-400 hover:text-violet-500"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-card theme-text transition hover:border-violet-400 hover:text-violet-500"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border theme-border theme-card theme-text transition hover:border-violet-400 hover:text-violet-500"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border theme-border theme-navbar p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-violet-500/10 text-violet-500"
                      : "theme-muted hover:bg-violet-500/5 hover:text-violet-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

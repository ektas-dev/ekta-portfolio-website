import { motion } from "motion/react";
import { ArrowDown, Download, Code2, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
import AboutPreview from "../components/AboutPreview";
import CareerTimeline from "../components/CareerTimeline";
import ContactCTA from "../components/ContactCTA";

const technologies = [
  "Java",
  "Spring Boot",
  "React.js",
  "JavaScript",
  "PostgreSQL",
  "REST APIs",
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-20">
        {/* Background glow */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/20 bg-violet-400/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300">
                Open to opportunities
              </span>
            </div>

            {/* Introduction */}
            <p className="text-violet-400 tracking-[0.25em] text-sm font-semibold mb-4">
              HELLO, I'M
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Ekta
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
                Sollet.
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mt-6">
              Java Full-Stack Developer
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-6 max-w-xl">
              I build backend applications and responsive web experiences using
              Java, Spring Boot, React.js and modern web technologies.
              Passionate about clean code, problem-solving and continuous
              learning.
            </p>

            {/* Technology badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 text-sm text-gray-300 rounded-lg
                  border border-white/10 bg-white/[0.03]
                  hover:border-violet-400/50 hover:text-violet-300
                  transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/projects">Explore Projects</Link>

              <a
                href="/resume.pdf"
                download="Ekta_Sollet_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3
                rounded-xl border border-white/15 text-gray-200
                hover:bg-white/5 hover:border-violet-400/50
                transition-all duration-300"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center gap-3 mt-14 text-gray-500 text-sm">
              <ArrowDown size={16} className="animate-bounce" />
              Scroll to explore
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-violet-600/10 blur-[100px] rounded-full" />

            {/* Code window */}
            <div
              className="relative rounded-2xl border border-white/10
            bg-[#11111b]/95 shadow-2xl shadow-violet-900/20 overflow-hidden"
            >
              {/* Window header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Terminal size={15} />
                  developer.java
                </div>

                <Code2 size={18} className="text-violet-400" />
              </div>

              {/* Code content */}
              <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-8">
                <p className="text-gray-500">// A little about me</p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">name</span>:{" "}
                  <span className="text-green-300">'Ekta Sollet'</span>,
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">role</span>:{" "}
                  <span className="text-green-300">'Full Stack Developer'</span>
                  ,
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">backend</span>:{" "}
                  <span className="text-green-300">'Java & Spring Boot'</span>,
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">frontend</span>:{" "}
                  <span className="text-green-300">'React.js'</span>,
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">database</span>:{" "}
                  <span className="text-green-300">'PostgreSQL'</span>,
                </p>

                <p className="pl-6">
                  <span className="text-violet-300">mindset</span>:{" "}
                  <span className="text-green-300">'Always learning'</span>
                </p>

                <p>{"}"}</p>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3 text-gray-400">
                  <Sparkles size={17} className="text-violet-400" />
                  <span className="text-xs sm:text-sm">
                    Turning ideas into working applications.
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-5 sm:-left-8
            flex items-center gap-3 px-5 py-4 rounded-xl
            bg-[#1b1b29] border border-white/10 shadow-xl"
            >
              <div className="p-2 rounded-lg bg-violet-500/15">
                <Code2 className="text-violet-400" size={22} />
              </div>

              <div>
                <p className="text-white text-sm font-semibold">
                  Building with code
                </p>
                <p className="text-gray-500 text-xs">
                  Java • React • Spring Boot
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TechStack />
      <AboutPreview />
      <CareerTimeline />
      {/* PROJECT PREVIEW SECTION */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col sm:flex-row sm:items-end
          justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-violet-400 text-sm tracking-widest font-semibold">
                WHAT I'VE BUILT
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                Featured Projects<span className="text-violet-400">.</span>
              </h2>

              <p className="text-gray-400 mt-3">
                Practical applications that demonstrate my development skills.
              </p>
            </div>

            <Link to="/projects">Explore Projects</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-7 border border-white/10
            bg-[#13131d] hover:border-violet-400/40 transition-all duration-300"
            >
              <p className="text-sm text-violet-400 font-medium">
                01 / FULL-STACK APPLICATION
              </p>

              <h3 className="text-2xl font-semibold mt-5">
                Taskly – Task Management
              </h3>

              <p className="text-gray-400 leading-relaxed mt-4">
                A Kanban-based task management application with authentication,
                role-based access, task management and drag-and-drop
                functionality.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "Spring Boot", "PostgreSQL", "JWT"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-2
                  rounded-md bg-white/5 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link to="/projects">Explore Projects</Link>
            </div>

            <div
              className="rounded-2xl p-7 border border-white/10
            bg-[#13131d] hover:border-cyan-400/40 transition-all duration-300"
            >
              <p className="text-sm text-cyan-400 font-medium">
                02 / ANDROID APPLICATION
              </p>

              <h3 className="text-2xl font-semibold mt-5">
                Attendance Tracker
              </h3>

              <p className="text-gray-400 leading-relaxed mt-4">
                An Android attendance management system using QR-code scanning
                to simplify attendance recording and management.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Java", "Android", "XML", "Firebase"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-2
                  rounded-md bg-white/5 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link to="/projects">Explore Projects</Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}

export default Home;

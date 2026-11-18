import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
  Database,
  ShieldCheck,
  Smartphone,
  GitBranch,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";
import ProjectArchitecture from "../components/ProjectArchitecture";

const featuredProject = {
  name: "Taskly",
  subtitle: "Full-Stack Task Management Application",
  description:
    "A full-stack Kanban-based task management application designed to organize work efficiently. Users can manage tasks across different workflow stages, while authentication and role-based authorization help secure application access.",
  technologies: [
    "React.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Spring Data JPA",
    "Hibernate",
    "JWT",
    "REST APIs",
  ],
  features: [
    "User registration and login with JWT authentication",
    "Role-based authorization for users and administrators",
    "Create, read, update and delete tasks",
    "Kanban workflow with To Do, Doing and Done statuses",
    "Drag-and-drop task status management",
    "Pagination and sorting",
    "DTO-based request and response handling",
    "Validation and centralized exception handling",
    "Swagger / OpenAPI documentation",
  ],
};

const otherProjects = [
  {
    number: "02",
    title: "Product Review Management System",
    category: "FULL-STACK APPLICATION",
    description:
      "A web application for managing product reviews, developed using Spring Boot and React.js, with API testing through Postman.",
    technologies: ["React.js", "Spring Boot", "PostgreSQL", "Postman"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Attendance Tracker",
    category: "ANDROID APPLICATION",
    description:
      "An Android-based attendance management system using QR codes to simplify attendance recording and management.",
    technologies: ["Java", "Android", "XML", "Firebase"],
    icon: Smartphone,
  },
];

function Projects() {
  return (
    <main className="min-h-screen">
      {/* PAGE HERO */}
      <section className="relative px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute top-10 left-1/3
        w-80 h-80 bg-violet-600/10
        blur-[120px] rounded-full"
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-violet-400 text-sm
            tracking-[0.25em] font-semibold"
            >
              MY WORK
            </p>

            <h1
              className="text-4xl sm:text-6xl
            font-bold mt-5 leading-tight"
            >
              Projects &
              <span
                className="block text-transparent
              bg-clip-text bg-gradient-to-r
              from-violet-400 to-cyan-400"
              >
                Experiments.
              </span>
            </h1>

            <p
              className="text-gray-400 text-lg
            max-w-2xl mt-7 leading-relaxed"
            >
              A collection of applications I've built to apply my technical
              knowledge, solve practical problems and grow as a developer.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Full-Stack Development",
                "Backend Engineering",
                "Frontend Development",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full
                    border border-white/10 bg-white/[0.03]
                    text-gray-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <p
              className="text-sm text-violet-400
            tracking-widest font-semibold"
            >
              FEATURED PROJECT
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden
            border border-white/10 bg-[#13131d]"
          >
            {/* Project visual placeholder */}
            <div
              className="relative min-h-[280px]
            sm:min-h-[380px] bg-gradient-to-br
            from-[#21143b] via-[#151526] to-[#10222c]
            flex items-center justify-center p-8"
            >
              <div
                className="absolute top-0 right-0
              w-72 h-72 bg-violet-500/15
              blur-[100px] rounded-full"
              />

              <div
                className="relative w-full max-w-3xl
              rounded-2xl border border-white/15
              bg-[#09090f]/90 p-5 sm:p-8 shadow-2xl"
              >
                <div
                  className="flex items-center
                justify-between border-b border-white/10 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="text-violet-400" size={22} />
                    <span className="font-semibold text-white">Taskly</span>
                  </div>

                  <span className="text-xs text-gray-500">TASK MANAGEMENT</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { title: "To Do", count: "03" },
                    { title: "Doing", count: "02" },
                    { title: "Done", count: "04" },
                  ].map((column) => (
                    <div
                      key={column.title}
                      className="rounded-xl bg-white/[0.04]
                      border border-white/10 p-3"
                    >
                      <div
                        className="flex justify-between
                      text-xs text-gray-300"
                      >
                        <span>{column.title}</span>
                        <span>{column.count}</span>
                      </div>

                      {[1, 2].map((item) => (
                        <div
                          key={item}
                          className="mt-3 h-12 rounded-lg
                          bg-white/[0.06] border border-white/5"
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-5">
                  Illustrative project preview — replace with actual Taskly
                  screenshots.
                </p>
              </div>
            </div>

            {/* Project Information */}
            <div className="p-7 sm:p-10">
              <div
                className="flex flex-wrap items-center
              justify-between gap-4"
              >
                <div>
                  <p
                    className="text-violet-400 text-xs
                  tracking-widest font-semibold"
                  >
                    01 / FULL-STACK APPLICATION
                  </p>

                  <h2
                    className="text-3xl sm:text-4xl
                  font-bold mt-3"
                  >
                    {featuredProject.name}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/ektas-dev/kanban-board-task-management.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Taskly GitHub repository"
                    className="p-3 rounded-xl border
                    border-white/10 text-gray-300
                    hover:text-violet-400
                    hover:border-violet-400/40 transition-all"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>

              <p
                className="text-gray-400 leading-relaxed
              mt-7 max-w-4xl"
              >
                {featuredProject.description}
              </p>

              {/* Architecture Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mt-9">
                <div
                  className="p-5 rounded-xl
                bg-white/[0.03] border border-white/5"
                >
                  <Code2 className="text-violet-400" size={22} />
                  <h3 className="text-white font-semibold mt-3">Frontend</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    React.js and component-based UI
                  </p>
                </div>

                <div
                  className="p-5 rounded-xl
                bg-white/[0.03] border border-white/5"
                >
                  <ShieldCheck className="text-cyan-400" size={22} />
                  <h3 className="text-white font-semibold mt-3">Backend</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Spring Boot, REST APIs and JWT
                  </p>
                </div>

                <div
                  className="p-5 rounded-xl
                bg-white/[0.03] border border-white/5"
                >
                  <Database className="text-purple-400" size={22} />
                  <h3 className="text-white font-semibold mt-3">Database</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    PostgreSQL and Spring Data JPA
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold">Key Features</h3>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                  {featuredProject.features.map((feature) => (
                    <div key={feature} className="flex gap-3 items-start">
                      <span
                        className="w-1.5 h-1.5
                      rounded-full bg-violet-400 mt-2 shrink-0"
                      />

                      <p className="text-sm text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-10">
                <h3
                  className="text-sm text-gray-400
                font-semibold mb-4"
                >
                  TECHNOLOGIES USED
                </h3>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg
                      bg-violet-500/5 border
                      border-violet-400/10
                      text-violet-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p
              className="text-violet-400 text-sm
            tracking-widest font-semibold"
            >
              MORE WORK
            </p>

            <h2
              className="text-3xl sm:text-4xl
            font-bold mt-4"
            >
              Other Projects
              <span className="text-violet-400">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl p-7
                  bg-[#13131d] border border-white/10
                  hover:border-violet-400/40
                  hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-violet-400">
                      {project.number}
                    </span>

                    <Icon className="text-violet-400" size={25} />
                  </div>

                  <p
                    className="text-xs tracking-widest
                  text-gray-500 mt-8"
                  >
                    {project.category}
                  </p>

                  <h3
                    className="text-2xl font-semibold
                  text-white mt-3"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-400 leading-relaxed
                  mt-4"
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-lg
                        bg-white/[0.04] text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="px-6 py-20 text-center
      border-t border-white/5"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Have a project in mind?
        </h2>

        <p className="text-gray-400 mt-4">
          Let's connect and discuss opportunities.
        </p>

        <a
          href="mailto:ektasollet12@gmail.com"
          className="inline-flex items-center gap-2
          mt-7 px-6 py-3 rounded-xl
          bg-violet-600 hover:bg-violet-500
          text-white transition-all"
        >
          Contact Me
          <ArrowUpRight size={18} />
        </a>
      </section>
      <ProjectArchitecture />
    </main>
  );
}

export default Projects;

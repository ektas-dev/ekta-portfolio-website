
import { motion } from "motion/react";
import {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Workflow,
  Layers3,
  ArrowDown,
  Code2,
} from "lucide-react";

const architecture = [
  {
    title: "Frontend Layer",
    subtitle: "React.js",
    icon: Monitor,
    color: "text-violet-400",
    description:
      "Responsible for the user interface, task interactions, navigation and communication with backend APIs.",
    items: [
      "Reusable React components",
      "Task management interface",
      "API integration",
      "Responsive user interface",
    ],
  },
  {
    title: "Backend Layer",
    subtitle: "Spring Boot",
    icon: Server,
    color: "text-cyan-400",
    description:
      "Processes application requests, implements business logic and exposes RESTful endpoints.",
    items: [
      "REST API controllers",
      "Service layer",
      "DTOs and mapping",
      "Validation and exception handling",
    ],
  },
  {
    title: "Security Layer",
    subtitle: "Spring Security + JWT",
    icon: ShieldCheck,
    color: "text-purple-400",
    description:
      "Handles user authentication and access control for protected application resources.",
    items: [
      "JWT authentication",
      "Request authorization",
      "Role-based access",
      "Protected endpoints",
    ],
  },
  {
    title: "Data Layer",
    subtitle: "PostgreSQL + JPA",
    icon: Database,
    color: "text-pink-400",
    description:
      "Manages persistent application data through Spring Data JPA and Hibernate.",
    items: [
      "Entity mapping",
      "Repository layer",
      "Database operations",
      "Relational data persistence",
    ],
  },
];

function ProjectArchitecture() {
  return (
    <section className="px-6 py-20 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-sm
          tracking-[0.25em] font-semibold">
            UNDER THE HOOD
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            System Architecture
            <span className="text-violet-400">.</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Taskly follows a layered full-stack architecture,
            separating user interface, application logic,
            security and data persistence.
          </p>
        </motion.div>

        {/* Architecture Cards */}
        <div className="mt-12 max-w-4xl mx-auto">

          {architecture.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <div key={layer.title}>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10
                  bg-[#13131d] p-6 sm:p-8
                  hover:border-violet-400/30
                  transition-colors"
                >

                  <div className="flex items-center gap-4">

                    <div className={`w-12 h-12 shrink-0
                    rounded-xl bg-white/5 flex items-center
                    justify-center ${layer.color}`}>
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {layer.title}
                      </h3>

                      <p className={`text-sm mt-1 ${layer.color}`}>
                        {layer.subtitle}
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-400 leading-relaxed
                  text-sm mt-6">
                    {layer.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mt-6">

                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2
                        text-sm text-gray-300"
                      >
                        <span className="w-1.5 h-1.5
                        rounded-full bg-violet-400" />
                        {item}
                      </div>
                    ))}

                  </div>

                </motion.div>

                {index !== architecture.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowDown
                      size={22}
                      className="text-violet-400"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ProjectArchitecture;

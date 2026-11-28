import { motion } from "motion/react";
import { Code2, Monitor, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    subtitle: "Core programming",
    icon: Code2,
    color: "text-violet-400",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    subtitle: "Building user interfaces",
    icon: Monitor,
    color: "text-cyan-400",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    subtitle: "Application development",
    icon: Server,
    color: "text-purple-400",
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"],
  },
  {
    title: "Databases",
    subtitle: "Data management",
    icon: Database,
    color: "text-blue-400",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    subtitle: "Development workflow",
    icon: Wrench,
    color: "text-pink-400",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "JUnit",
      "Swagger",
      "Eclipse",
      "VS Code",
    ],
  },
];

function TechStack() {
  return (
    <section className="px-6 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-violet-400 text-sm tracking-[0.25em] font-semibold">
            MY EXPERTISE
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Technologies I Work With
            <span className="text-violet-400">.</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            My technical toolkit includes backend development, frontend
            technologies, databases and tools used to build and maintain modern
            applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group p-7 rounded-2xl border border-white/10
                bg-[#13131d] hover:border-violet-400/40
                hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-white/5
                flex items-center justify-center mb-6 ${group.color}`}
                >
                  <Icon size={25} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">{group.subtitle}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 text-sm rounded-lg
                      bg-white/[0.04] border border-white/5
                      text-gray-300 group-hover:border-violet-400/20
                      transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;

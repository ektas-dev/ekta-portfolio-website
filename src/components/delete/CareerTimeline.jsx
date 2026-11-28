import { motion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Rocket,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const journey = [
  {
    id: 1,
    period: "2017 – 2020",
    category: "EDUCATION",
    title: "Bachelor of Science – Information Technology",
    organization: "Jai Hind College, Mumbai",
    description:
      "Completed my undergraduate degree in Information Technology, developing a foundation in programming, databases, software development and computer science.",
    details: ["CGPA: 9.55", "82.40%"],
    icon: GraduationCap,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    id: 2,
    period: "October 2020 – April 2022",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Software Analyst",
    organization: "Capgemini",
    description:
      "Worked in a software development environment, gaining professional experience with Java, Spring Boot, Oracle, MySQL and JavaScript.",
    details: ["Java Development", "Spring Boot", "Oracle", "MySQL"],
    icon: BriefcaseBusiness,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 3,
    period: "July 2023 – 2025",
    category: "EDUCATION",
    title: "Master of Business Administration",
    organization: "Indira Gandhi National Open University (IGNOU)",
    description:
      "Pursued an MBA through distance learning, strengthening my understanding of business management, organizational processes and analytical thinking.",
    details: ["Distance Learning", "Business Management"],
    icon: GraduationCap,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: 4,
    period: "April 2026 – Present",
    category: "PROJECT DEVELOPMENT",
    title: "Full-Stack Development",
    organization: "Independent Projects",
    description:
      "Focused on strengthening full-stack development skills by designing and building practical applications, including Taskly, a Kanban-based task management system.",
    details: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
    icon: Rocket,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

function CareerTimeline() {
  return (
    <section className="px-6 py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-sm tracking-[0.25em] font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Education & Experience
            <span className="text-violet-400">.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            My journey through education, professional experience and continuous
            development as a software developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-[19px] sm:left-1/2
          top-3 bottom-3 w-px bg-gradient-to-b
          from-violet-500/70 via-cyan-500/40 to-pink-500/70
          sm:-translate-x-1/2"
          />

          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className={`relative flex flex-col sm:flex-row
                  items-start sm:items-center
                  ${isRight ? "sm:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Marker */}
                  <div
                    className={`absolute left-0 sm:left-1/2
                  top-7 sm:top-1/2 -translate-y-1/2
                  sm:-translate-x-1/2 z-10 w-10 h-10
                  rounded-full border border-white/10
                  ${item.bg} flex items-center justify-center
                  ${item.color} shadow-lg`}
                  >
                    <Icon size={19} />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full pl-16 sm:pl-0
                  sm:w-[calc(50%-40px)]
                  ${isRight ? "sm:ml-0" : "sm:mr-auto"}`}
                  >
                    <div
                      className="group rounded-2xl
                    bg-[#13131d] border border-white/10
                    p-6 sm:p-7
                    hover:border-violet-400/40
                    hover:-translate-y-1
                    transition-all duration-300"
                    >
                      {/* Date */}
                      <div
                        className="flex items-center gap-2
                      text-gray-400 text-xs sm:text-sm mb-5"
                      >
                        <CalendarDays size={15} className={item.color} />
                        {item.period}
                      </div>

                      {/* Category */}
                      <p
                        className={`text-xs font-semibold
                      tracking-[0.15em] ${item.color}`}
                      >
                        {item.category}
                      </p>

                      {/* Title */}
                      <h3
                        className="text-xl font-semibold
                      text-white mt-3 leading-snug"
                      >
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-gray-400 text-sm mt-2">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p
                        className="text-gray-400 text-sm
                      leading-relaxed mt-5"
                      >
                        {item.description}
                      </p>

                      {/* Skills / Details */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1.5
                            rounded-lg text-xs
                            bg-white/[0.04]
                            border border-white/5
                            text-gray-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            Interested in learning more about my work?
          </p>

          <a
            href="/projects"
            className="inline-flex items-center gap-2
            mt-5 px-6 py-3 rounded-xl
            border border-violet-400/30
            text-violet-400 hover:bg-violet-500/10
            transition-all"
          >
            Explore My Projects
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerTimeline;

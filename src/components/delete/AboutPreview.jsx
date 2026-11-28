import { motion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Professional Experience",
    description: "Software Analyst at Capgemini",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Sc. Information Technology",
  },
  {
    icon: Code2,
    title: "Current Focus",
    description: "Java Full-Stack Development",
  },
];

function AboutPreview() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
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
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            A Little About Me
            <span className="text-violet-400">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
              Building meaningful applications through
              <span className="text-violet-400"> code and creativity.</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mt-7">
              I'm a Java Full-Stack Developer with a background in Information
              Technology and professional experience as a Software Analyst at
              Capgemini.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              My development experience includes Java, Spring Boot, SQL and
              modern web technologies. I enjoy working across the application
              stack, from developing backend APIs to building responsive user
              interfaces.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              Currently, I'm strengthening my full-stack development skills
              through hands-on projects, exploring better development practices
              and building applications that solve practical problems.
            </p>

            {/* Learn More */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-9
              text-violet-400 font-medium hover:text-cyan-300
              transition-colors group"
            >
              More About Me
              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1
                group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* RIGHT: PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 bg-violet-600/5
            blur-3xl rounded-full"
            />

            <div
              className="relative rounded-2xl border border-white/10
            bg-[#13131d] p-7 sm:p-9"
            >
              {/* Profile Header */}
              <div
                className="flex items-center gap-4 pb-7
              border-b border-white/10"
              >
                <div
                  className="w-16 h-16 rounded-2xl
                bg-gradient-to-br from-violet-500 to-cyan-500
                flex items-center justify-center"
                >
                  <Code2 size={30} className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Ekta Sollet
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Java Full-Stack Developer
                  </p>

                  <div
                    className="flex items-center gap-1.5 mt-2
                  text-gray-500 text-xs"
                  >
                    <MapPin size={13} />
                    India
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-7 mt-8">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15,
                      }}
                      className="flex gap-4 items-start"
                    >
                      <div
                        className="w-11 h-11 shrink-0 rounded-xl
                      bg-violet-500/10 flex items-center
                      justify-center text-violet-400"
                      >
                        <Icon size={21} />
                      </div>

                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>

                        <p className="text-gray-400 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Message */}
              <div
                className="mt-9 p-4 rounded-xl
              bg-violet-500/5 border border-violet-400/10
              flex items-center gap-3"
              >
                <Sparkles className="text-violet-400 shrink-0" size={20} />

                <p className="text-sm text-gray-300">
                  Always learning. Always building. Always improving.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "React",
    description: "Building dynamic and responsive user interfaces.",
    year: "2021",
  },
  {
    title: "React Native",
    description: "Creating mobile applications with a native feel.",
    year: "2022",
  },
  {
    title: "JavaScript",
    description: "Enhancing interactivity and functionality.",
    year: "2023",
  },
  {
    title: "HTML & CSS",
    description: "Crafting semantic and accessible web pages.",
    year: "2024",
  },
  {
    title: "Tailwind CSS",
    description: "Using utility-first CSS for rapid styling.",
    year: "2025",
  },
  {
    title: "TypeScript",
    description: "Adding type safety to JavaScript code.",
    year: "2025",
  },
  {
    title: "TanStack Query",
    description: "Handling server state with ease.",
    year: "2025",
  },
  {
    title: "Material UI & PrimeReact",
    description: "Implementing modern UI components.",
    year: "2025",
  },
  {
    title: "Framer Motion",
    description: "Adding motion for a polished user experience.",
    year: "2025",
  },
  {
    title: "Node.js",
    description: "Building scalable server-side applications.",
    year: "2025",
  },
  {
    title: "Express.js",
    description: "Creating robust REST APIs and web servers.",
    year: "2025",
  },
  {
    title: "MongoDB",
    description: "Managing NoSQL databases with flexibility.",
    year: "2025",
  },
  {
    title: "Nest.js",
    description: "Building enterprise-grade backend applications.",
    year: "2026",
  },
] as const;

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex];

  return (
    <section className="px-6 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
          <span className="h-px w-12 bg-emerald-400/70" />
          <h2 className="text-xl font-semibold tracking-tight text-emerald-300 sm:text-3xl lg:text-4xl">
            The evolution
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={`${step.title}-${step.year}`}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left shadow-lg shadow-black/20 backdrop-blur-md transition-colors duration-300 ${
                    isActive
                      ? "border-emerald-400/50 bg-emerald-400/10"
                      : "border-white/10 bg-white/5 hover:border-emerald-400/30"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-transparent to-emerald-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium tracking-[0.25em] text-emerald-200">
                        {step.year}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-emerald-100 sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className={`mt-1 h-3 w-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.7)] ${
                        isActive ? "bg-emerald-300" : "bg-emerald-400"
                      }`}
                    />
                  </div>
                  <p className="relative mt-4 text-xs leading-6 text-emerald-100/80 sm:text-sm sm:leading-7">
                    {step.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <motion.aside
            key={`${activeStep.title}-${activeStep.year}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-emerald-400/20 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-md lg:sticky lg:top-8 lg:self-start"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200 sm:text-sm">
              Selected milestone
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-100 sm:text-3xl">
              {activeStep.title}
            </h3>
            <p className="mt-3 text-xs font-medium tracking-[0.25em] text-emerald-200/70 sm:text-sm">
              {activeStep.year}
            </p>
            <p className="mt-6 text-xs leading-6 text-emerald-100/80 sm:text-sm sm:leading-7">
              {activeStep.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-200/70 sm:text-xs">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-100 sm:text-base sm:leading-7">
                Click any milestone to switch the preview and track progress
                through the learning path.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {steps.slice(Math.max(0, activeIndex - 2), activeIndex + 3).map((step) => (
                <span
                  key={`${step.title}-${step.year}-chip`}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100"
                >
                  {step.title}
                </span>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;

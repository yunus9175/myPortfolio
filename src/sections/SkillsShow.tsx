import { motion } from "framer-motion";
import { skills } from "../data";

const SkillsShow = () => {
  return (
    <section className="relative mt-4 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-black px-6 py-12 text-green-400 sm:py-14">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-green-300/70 sm:text-xs">
          Core capabilities
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl">
          Check out my skills
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7">
          A quick visual scan of the tools and technologies I use to build modern
          interfaces and reliable backend systems.
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-0 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <div className="marquee-left flex w-max items-center">
          <div className="flex items-center gap-6 pr-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
              className="flex min-w-[160px] shrink-0 items-center gap-3 rounded-full border border-emerald-400/20 bg-black/35 px-4 py-3 text-left shadow-lg shadow-black/20 sm:min-w-[180px] sm:px-5 sm:py-4"
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-base text-emerald-300 sm:h-11 sm:w-11 sm:text-lg">
                  {skill.name.slice(0, 1)}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xs font-semibold text-white sm:text-sm">
                    {skill.name}
                  </h2>
                  <p className="text-[10px] font-medium text-emerald-300/80 sm:text-xs">
                    {skill.level}% proficiency
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 pr-6" aria-hidden="true">
            {skills.map((skill) => (
              <div
                key={`${skill.name}-repeat`}
              className="flex min-w-[160px] shrink-0 items-center gap-3 rounded-full border border-emerald-400/20 bg-black/35 px-4 py-3 text-left shadow-lg shadow-black/20 sm:min-w-[180px] sm:px-5 sm:py-4"
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-base text-emerald-300 sm:h-11 sm:w-11 sm:text-lg">
                  {skill.name.slice(0, 1)}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xs font-semibold text-white sm:text-sm">
                    {skill.name}
                  </h2>
                  <p className="text-[10px] font-medium text-emerald-300/80 sm:text-xs">
                    {skill.level}% proficiency
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShow;

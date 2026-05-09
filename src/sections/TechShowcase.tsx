import { motion } from "framer-motion";
import { projects } from "../data";

const summarize = (text: string, limit = 150) =>
  text.length > limit ? `${text.slice(0, limit).trimEnd()}...` : text;

const TechShowcase = () => {
  return (
    <section className="px-6 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="h-px w-12 bg-emerald-400/70" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300/80 sm:text-xs">
              Featured work
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              The Developer&apos;s Vault
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {project.title}
                  </h3>
                  <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
                </div>

                  <p className="text-xs leading-6 text-gray-300 sm:text-sm">
                    {summarize(project.description)}
                  </p>

                <div className="mt-auto rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/70 sm:text-xs">
                      Stack preview
                    </p>
                    <p className="mt-2 max-h-20 overflow-hidden text-xs leading-6 text-emerald-100/90 sm:text-sm">
                      {summarize(project.technologies, 110)}
                    </p>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black transition-transform duration-300 hover:scale-[1.03] sm:text-sm"
                  >
                    Visit project
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";
const TechShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400">
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-3xl font-bold md:text-5xl mb-10"
      >
        🔐 The Developer's Vault
      </motion.h1>
      <div className="space-y-10 w-full max-w-4xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="p-4  border border-green-400 rounded-lg shadow-lg cursor-pointer relative"
            onClick={() =>
              setSelectedProject(
                selectedProject === project.id ? null : project.id
              )
            }
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <motion.div
              initial={{ opacity: 1, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-gray-300 text-sm md:text-lg"
            >
              <p>{project.description}</p>
              <p className="mt-1 text-green-300">🔧 {project.technologies}</p>
            </motion.div>
            <motion.div
              animate={{ opacity: selectedProject === project.id ? 1 : 0 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-lg border-5 border-green-400 opacity-30 blur-md"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;

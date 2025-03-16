import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../data";
const SkillsShow = () => {
  const [selectedSkills, setSelectedSkills] = useState<string | null>(null);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 px-6 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-3xl font-bold md:text-5xl mb-10"
      >
        🔐 Check out my skills
      </motion.h1>
      <div className="relative w-full max-w-4xl h-[400px] md:h-[600px]">
        {skills.map((skill) => {
          const size = skill.level / 3 + 70;
          const randomX = Math.random() * 80 + 20;
          const randomY = Math.random() * 80 + 20;

          return (
            <motion.div
              key={skill.name}
              style={{
                width: size + "px",
                height: size + "px",
                backgroundColor:
                  selectedSkills === skill.name ? "#10b981" : "#22c55e",
                left: randomX + "%",
                top: randomY + "%",
              }}
              className="absolute rounded-full  flex flex-col items-center justify-center text-black font-bold cursor-pointer shadow-lg"
              onMouseEnter={() => setSelectedSkills(skill.name)}
              onMouseLeave={() => setSelectedSkills(null)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <h2 className="text-black font-bold text-center">{skill.name}</h2>
              <p className="text-blue-500 font-bold text-center">
                {skill.level}%
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsShow;

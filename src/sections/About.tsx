import { motion } from "framer-motion";

const Steps = [
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
    description: "Utilizing utility-first CSS for rapid styling.",
    year: "2025",
  },
  {
    title: "Redux",
    description: "Managing state efficiently in complex applications.",
    year: "2025",
  },
  {
    title: "TypeScript",
    description: "Adding type safety to JavaScript code.",
    year: "2025",
  },
  {
    title: "Tenstack Query",
    description: "Handling server state with ease.",
    year: "2025",
  },
  {
    title: "Material UI & PrimeReact",
    description: "Implementing modern UI components.",
    year: "2025",
  },
  {
    title: "Motion Framer",
    description: "Adding animations for a polished user experience.",
    year: "2025",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-gray-400 px-6 py-20">
      <motion.h2
        className="text-3xl md:text-6xl font-extrabold tracking-wide relative text-green-500 z-10 cursor-pointer mb-20 "
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        📚 The Evolution
      </motion.h2>
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-1/2 transform -transform-x-1/2 w-1 h-full bg-gray-600 opacity-30" />
        {Steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className={`relative flex items-center flex-col md:flex-row justify-between mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/3 w-full text-green-400 ">{step.year}</div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-800 shadow-md md:mx-6 my-4" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="md:w-1/3 w-full bg-black p-4 rounded-lg shadow-lg text-center border border-green-400"
            >
              <h3 className="text-xl font-bold text-green-500">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

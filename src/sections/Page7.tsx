import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
const Page7 = () => {
  const [text, setText] = useState("");
  const finalMessage =
    "I'm always looking for new opportunities to learn and grow. If you have any questions or just want to say hi, feel free to reach out.";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + finalMessage[i]);
      i++;
      if (i === finalMessage.length - 1) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl"
      ></motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold md:text-5xl mb-10 z-20"
      >
        Let's Connect
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl flex space-x-10 font-bold md:text-5xl mb-10 relative !z-20"
      >
        <a href="https://github.com/yunus9175" target="_blank">
          <FaGithub className="text-3xl hover:text-green-400 transition-all duration-300 hover:scale-110" />
        </a>
        <a href="#" target="_blank">
          <FaLinkedin className="text-3xl hover:text-green-400 transition-all duration-300 hover:scale-110" />
        </a>
        <a href="#" target="_blank">
          <FaInstagram className="text-3xl hover:text-green-400 transition-all duration-300 hover:scale-110" />
        </a>
      </motion.div>
      <div className="flex flex-col items-center justify-center font-bold text-2xl z-20 bg-gray-500 rounded-lg p-4 border border-green-400 w-full max-w-lg relative">
        <p>user@portofolio.com</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Page7;

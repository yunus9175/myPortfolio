import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out",
      }
    );
    gsap.fromTo(
      btnRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
      }
    );
  }, []);
  return (
    <div className="h-screen  flex flex-col justify-center items-center bg-black text-gray-400 px-6 relative">
      <motion.div
        className="absolute w-96 h-96 bg-green-500 rounded-full blur-2xl"
        initial={{ x: "-100%", y: "-100%", opacity: 0 }}
        animate={{ x: "10%", y: "10%", opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-16 left-10 text-gray-500 font-mono text-sm opacity-50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {"<h1>Welcome to My Dev World</h1>"}
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-0 md:right-10 text-gray-500 font-mono text-sm opacity-50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {"<code>const passion = 'Coding & Creativity'</code>"}
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-wide relative z-10 cursor-pointer text-center"
        ref={titleRef}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(0, 255, 0, 0.6)",
        }}
      >
        {/* <FaRocket style={{ marginRight: "10px" }} /> */}
        👨🏽‍💻 Hey, I'm Mohammad Yunus
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl font-extrabold tracking-wide relative z-10 cursor-pointer text-green-500 max-w-3xl mx-auto relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate <strong>Frontend Developer</strong> crafting interactive
        experiences with 🚀
        <strong>
          ReactJS, Tailwind, Typescript, React-Router, React-Hook-Form,
          React-Icons, Redux, Tanstack Query,API integration, GSAP & Framer
          Motion.
        </strong>
      </motion.p>
      <motion.button
        ref={btnRef}
        className="mt-6 px-6 py-3 bg-green-500 text-black rounded-full  transition-colors duration-300 z-10 cursor-pointer"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#00ff00",
          color: "#000",
        }}
      >
        Explore My Work 🚀
      </motion.button>
    </div>
  );
};

export default Home;

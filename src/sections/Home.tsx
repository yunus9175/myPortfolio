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
    <div className="flex h-screen flex-col items-center justify-center bg-black px-6 text-gray-400 relative">
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-green-500 blur-2xl sm:h-80 sm:w-80 md:h-96 md:w-96"
        initial={{ x: "-100%", y: "-100%", opacity: 0 }}
        animate={{ x: "10%", y: "10%", opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-4 top-12 font-mono text-xs text-gray-500 opacity-50 sm:left-8 sm:top-16 sm:text-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {"<h1>Welcome to My Dev World</h1>"}
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-4 font-mono text-xs text-gray-500 opacity-50 sm:bottom-10 sm:right-6 sm:text-sm md:right-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {"<code>const passion = 'Coding & Creativity'</code>"}
      </motion.div>
      <motion.h1
        className="relative z-10 cursor-pointer px-2 text-center text-3xl font-extrabold tracking-wide sm:text-4xl md:text-6xl"
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
        className="relative z-10 mx-auto mt-4 max-w-3xl cursor-pointer px-2 text-center text-sm font-semibold tracking-wide text-green-500 sm:text-base md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate <strong>Fullstack Developer</strong> crafting interactive
        experiences with 🚀
        <strong>
          ReactJS, Tailwind, Typescript, React-Router, React-Hook-Form,
          React-Icons, Redux, Tanstack Query, API integration, GSAP, Framer
          Motion, Node.js, Express.js, MongoDB & Nest.js.
        </strong>
      </motion.p>
      <motion.button
        ref={btnRef}
        className="z-10 mt-6 cursor-pointer rounded-full bg-green-500 px-5 py-2.5 text-sm text-black transition-colors duration-300 sm:px-6 sm:py-3 sm:text-base"
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

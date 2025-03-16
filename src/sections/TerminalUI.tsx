import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { myProjectsList } from "../data";

const TerminalUI = () => {
  const [inputValue, setInputValue] = useState("");
  const [to, setTo] = useState([
    "Type 'show projects' to see the projects list",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleEnter = (value: string) => {
    if (value?.toLowerCase() === "show projects") {
      myProjectsList.forEach((project, i) => {
        setTimeout(() => {
          setTo((prev) => [
            ...prev,
            `> ${project.command}`,
            ` ${project.name} | ${project.tech}`,
          ]);
        }, (i + 1) * 1000);
      });
      setTimeout(() => {
        setTo((prev) => [...prev, "Done"]);
      }, 1000);
    } else {
      setTo([...to, "Invalid command: " + value]);
    }
  };

  useEffect(() => {
    gsap.fromTo("terminal", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="font-bold md:text-5xl mb-10 w-full max-w-4xl border border-green-400 rounded-lg  terminal"
      >
        <p className="text-lg font-mono mb-2 p-2">Developer Console</p>
        <div className="h-64 overflow-y-auto text-sm font-mono bg-black p-3  border border-green-400 ">
          {to.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="flex items-center mt-3">
          <span className="text-green-400 font-mono"></span>
          <input
            ref={inputRef}
            type="text"
            className="bg-black text-green-400 font-mono border-none outline-none ml-2 w-full mb-3"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnter(inputValue);
                setInputValue("");
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalUI;

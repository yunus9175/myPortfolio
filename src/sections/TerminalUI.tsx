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
    <section className="relative flex min-h-[85vh] items-center justify-center bg-black px-6 py-12 text-green-400 sm:py-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="terminal w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-emerald-400/25 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300/70 sm:text-xs">
              Terminal session
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
              Developer Console
            </p>
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/90" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          </div>
        </div>

        <div className="h-64 overflow-y-auto border-b border-white/10 bg-black/40 p-4 font-mono text-xs text-emerald-100 sm:text-sm">
          {to.map((item, i) => (
            <p key={i} className="leading-7">
              {item}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-3 px-4 py-4">
          <span className="text-green-400 font-mono"></span>
          <input
            ref={inputRef}
            type="text"
            className="w-full border-none bg-transparent font-mono text-sm text-emerald-100 outline-none placeholder:text-emerald-200/40 sm:text-base"
            placeholder="Type a command..."
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
    </section>
  );
};

export default TerminalUI;

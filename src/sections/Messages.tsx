import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const splitGraphemes = (value: string) => {
  const intlAny = Intl as any;

  if (typeof Intl !== "undefined" && intlAny?.Segmenter) {
    const graphemeSegmenter = new intlAny.Segmenter(undefined, {
      granularity: "grapheme",
    });
    return Array.from(graphemeSegmenter.segment(value), (segment: any) => {
      return segment.segment;
    });
  }

  return Array.from(value);
};

const Page3 = () => {
  const messageText = [
    "⚛️ Building responsive UIs with React",
    "📱 Crafting Mobile Apps with React Native",
    "💻 Enhancing with JavaScript",
    "🌐 Structuring with HTML & CSS",
    "🎨 Styling with Tailwind CSS",
    "🔄 Managing State with Redux",
    "🔍 Type Safety with TypeScript",
    "🔗 Querying with Tenstack Query",
    "🛠️ Basics of Node.js",
    "🖌️ Designing with Material UI",
    "🌟 UI Components with PrimeReact",
    "🎥 Animating with Motion Framer",
    "📊 Visualizing Data with FusionChart",
    "🚀 Backend with Express.js",
    "🗄️ Databases with MongoDB",
    "🏗️ Building with Nest.js",
    "⚙️ RESTful API Development",
  ];
  const [cMn, setCMn] = useState("");
  const [cMnIndex, setCMnIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const typedLines = cMn.split("\n").filter(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("page3");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (cMnIndex < messageText.length) {
          setCMn((prev) => prev + messageText[cMnIndex] + "\n");
          setCMnIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView, cMnIndex, messageText]);

  return (
    <section
      id="page3"
      className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-12 text-emerald-300 sm:py-14"
    >
      <motion.div
        className="pointer-events-none absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-[-5rem] h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-white/5 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_30%,rgba(255,255,255,0.02)_100%)]" />

        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-1 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-red-400/90 shadow-[0_0_14px_rgba(248,113,113,0.45)]" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/90 shadow-[0_0_14px_rgba(250,204,21,0.35)]" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_14px_rgba(16,185,129,0.45)]" />
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200">
            Live signal
          </div>
        </div>

        <div className="relative z-10 grid gap-6 px-1 pt-6 lg:grid-cols-[220px_1fr]">
          <motion.div
            className="rounded-3xl border border-emerald-400/15 bg-black/25 p-5"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-200/70 sm:text-xs">
              Signal
            </p>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-emerald-100 sm:text-2xl">
              RECEIVED
            </h2>
            <p className="mt-3 text-xs leading-6 text-emerald-100/70 sm:text-sm sm:leading-7">
              Incoming content is streaming into the terminal with a subtle glow
              and cursor-like rhythm.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/80 sm:text-xs">
                Active feed
              </span>
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/15 bg-black/30 p-5 sm:p-6">
            <motion.div
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(16,185,129,0.08)_50%,transparent_100%)]"
            />
            <motion.div
              animate={{ y: ["-100%", "120%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-200/70 sm:text-xs">
                  Console output
                </span>

              </div>

              <div className="space-y-2 font-mono text-sm leading-7 text-emerald-100 sm:text-base sm:leading-8 md:text-xl">
                {typedLines.map((line, lineIndex) => (
                  <motion.p
                    key={`${line}-${lineIndex}`}
                    className="whitespace-pre-wrap"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {splitGraphemes(line).map((char, charIndex) => (
                      <motion.span
                        key={`${lineIndex}-${charIndex}-${char}`}
                        className="inline-block"
                        initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.14,
                          ease: "easeOut",
                          delay: charIndex * 0.006,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.p>
                ))}
                <motion.span
                  aria-hidden="true"
                  className="inline-block h-5 w-[2px] translate-y-[3px] bg-emerald-300"
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Page3;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Page3 = () => {
  const messageText = [
    "⚛️ Building with React",
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
  ];
  const [cMn, setCMn] = useState("");
  const [cMnIndex, setCMnIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

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
    <div
      id="page3"
      className="flex justify-center items-center h-screen bg-black text-green-400 px-6"
    >
      <motion.div className="relative p-6 w-[90%] md:w-[60%] min-h-[400px] border border-green-400 rounded-lg shadow-lg bg-gray-900/20 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-2 left-2 w-full text-sm"
        >
          SIGNAL RECEIVED
        </motion.div>
        <pre className="whitespace-pre-wrap text-lg md:text-xl font-mono mt-10">
          {cMn}
        </pre>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-xl border border-green-400/20 opacity-20 blur-lg"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Page3;

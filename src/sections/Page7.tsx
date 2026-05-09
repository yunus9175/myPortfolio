import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Page7 = () => {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/yunus9175",
      icon: FaGithub,
      label: "View projects and code",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-yunus-9b6251128/",
      icon: FaLinkedin,
      label: "Connect professionally",
    },
  ];

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-black px-6 py-12 text-green-400 sm:py-14">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 mb-4 text-center text-3xl font-semibold tracking-tight text-green-300 sm:text-4xl md:text-6xl"
      >
        Let's Connect
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="z-20 mb-10 max-w-2xl text-center text-xs leading-6 text-green-100/75 sm:text-sm sm:leading-7 md:text-base"
      >
        A simple place to find me online. Use GitHub for code and LinkedIn for
        professional contact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 grid w-full max-w-3xl gap-4 md:grid-cols-2"
      >
        {links.map(({ name, href, icon: Icon, label }) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group rounded-2xl border border-green-400/25 bg-white/5 p-5 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-green-300/60 hover:bg-white/8"
            aria-label={`Open ${name}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-2xl text-green-300 transition-colors duration-300 group-hover:bg-green-400/20 group-hover:text-green-200 sm:h-14 sm:w-14 sm:text-3xl">
                <Icon />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-green-100 sm:text-lg">{name}</p>
                <p className="text-xs text-green-100/70 sm:text-sm">{label}</p>
                <p className="mt-1 truncate text-[10px] text-green-300/60 sm:text-xs">
                  {href}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Page7;

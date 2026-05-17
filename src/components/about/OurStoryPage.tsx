import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurStoryPage = () => {
  const { t } = useTranslation("ourstory");

  return (
    <section className="relative overflow-hidden bg-[#07031a] py-24 px-4 md:px-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[180px] rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full"
        />

        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-0 w-[300px] h-[300px] bg-pink-500/10 blur-[130px] rounded-full"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 border border-orange-500/30 bg-orange-500/10 px-8 py-4 rounded-full mb-10 shadow-lg shadow-orange-500/10"
        >
          {/* LEFT STAR */}
          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-orange-300 text-xl"
          >
            ✨
          </motion.span>

          {/* BADGE TEXT */}
          <motion.span
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-orange-400 font-semibold text-lg"
          >
            {t("story.badge")}
          </motion.span>

          {/* RIGHT STAR */}
          <motion.span
            animate={{
              rotate: [0, -15, 15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-orange-300 text-xl"
          >
            ✨
          </motion.span>
        </motion.div>

        {/* TITLE ONE */}
        <motion.h1
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-white font-serif font-bold leading-tight tracking-tight text-3xl md:text-4xl lg:text-7xl"
        >
          {t("story.titleOne")}
        </motion.h1>

        {/* TITLE TWO */}
        <motion.h2
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mt-4 text-2xl md:text-4xl lg:text-5xl font-serif font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-orange-300 bg-clip-text text-transparent"
        >
          {t("story.titleTwo")}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mt-6 max-w-4xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light"
        >
          {t("story.description")}
        </motion.p>
      </div>
    </section>
  );
};

export default OurStoryPage;

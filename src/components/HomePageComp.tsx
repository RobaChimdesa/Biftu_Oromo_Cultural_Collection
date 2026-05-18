import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const HomePageComp = () => {
  const { t } = useTranslation("home");

  const slides = [
    {
      id: 1,
      titleKey: "slide1.title",
      desckey: "slide1.description",
      image:
        "https://res.cloudinary.com/dpc9pnok7/image/upload/v1777636984/8th_ndninh.png",
    },
    {
      id: 2,
      titleKey: "slide2.title",
      desckey: "slide2.description",
      image:
        "https://res.cloudinary.com/dpc9pnok7/image/upload/v1777636892/4th_ahjzxk.png",
    },
    {
      id: 3,
      titleKey: "slide3.title",
      desckey: "slide3.description",
      image:
        "https://res.cloudinary.com/dpc9pnok7/image/upload/v1777637998/Screenshot_2026-05-01_151853_bsok7b.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${current.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/25">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-orange-900/20" />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-400/30 bg-orange-500/10 backdrop-blur-md mb-6"
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-orange-400"
              >
                ✦
              </motion.span>

              <span className="text-sm md:text-base text-orange-100 font-medium">
                Biftu Oromo Cultural Collection
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
            >
              {t(current.titleKey)}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-100 text-base md:text-xl leading-relaxed max-w-xl"
            >
              {t(current.desckey)}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                {t("buttons.shopNow")}
              </button>

              <button className="px-8 py-4 rounded-full border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                Explore Collection
              </button>
            </motion.div>

            {/* INDICATORS */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === index
                      ? "w-10 h-3 bg-orange-500"
                      : "w-3 h-3 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <FiArrowLeft size={26} className="text-white" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <FiArrowRight size={26} className="text-white" />
      </button>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePageComp;
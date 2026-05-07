import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

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
        "https://res.cloudinary.com/dpc9pnok7/image/upload/v1777637975/Screenshot_2026-05-01_151737_xpybdd.png",
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

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${current.image})`,
        backgroundSize: "repeat-x",
        backgroundPosition: "right",
      }}
    >
      {/* DARK + ORANGE OVERLAY */}
      <div className="absolute inset-0 bg-black/10 ">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/10 to-orange-700/40" />
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            {t(current.titleKey)}
          </h1>

          <p className="text-gray-200 text-sm md:text-lg">
            {t(current.desckey)}
          </p>

          <button className="mt-44 bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-full font-semibold">
            <span className="cursor-pointer "> {t("buttons.shopNow")}</span>
          </button>
        </div>
      </div>

      {/* LEFT ARROW (CENTERED) */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-black/40 hover:bg-orange-500 transition-all duration-300 cursor-pointer"
      >
        <FiArrowLeft size={28} className="cursor-pointer" />
      </button>

      {/* RIGHT ARROW (CENTERED) */}
      <button
        onClick={next}
        className="absolute  right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-orange-500 transition-all duration-300"
      >
        <FiArrowRight size={28} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default HomePageComp;

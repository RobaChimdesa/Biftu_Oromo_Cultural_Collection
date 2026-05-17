import Header from "../../module/common/Header";
import Footer from "../../module/common/Footer";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const artisans = [
  {
    id: 1,
    name: "Sena Girma",
    roleKey: "founder",
    descriptionKey: "founderDesc",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Caltu Lata",
    roleKey: "creative",
    descriptionKey: "creativeDesc",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Abdi Lema",
    roleKey: "master",
    descriptionKey: "masterDesc",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

const OurArtisansPage = () => {
  const { t } = useTranslation("artisan");

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f5f2] py-24 px-4 md:px-16">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[200px] h-[300px] bg-orange-100 blur-3xl opacity-40 rounded-full"></div>

        <div className="max-w-5xl mx-auto relative scale-z-105">
          {/* TOP */}
          <div className="text-center mb-20 ">
            <p className="uppercase tracking-[5px] text-orange-700 font-semibold text-sm mb-5  animate-pulse">
              ✨ {t("artisans.badge")} ✨
            </p>

            <h1 className="text-xl md:text-3xl font-serif font-semibold text-[#1a1a1a] uppercase">
              {t("artisans.title")}
            </h1>

            <div className="w-28 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>

            <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-lg leading-9 mt-2">
              {t("artisans.description")}
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
            {artisans.map((artisan) => (
              <div
                key={artisan.id}
                className="group relative overflow-hidden rounded-[35px] shadow-xl bg-white h-[400px] transition-all duration-700 hover:-translate-y-5 cursor-pointer"
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-700"></div>
                </div>

                {/* DEFAULT CONTENT */}
                <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-5 text-center transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-10">
                  <h2 className="text-xl font-serif font-semibold text-[#2d2d2d]">
                    {artisan.name}
                  </h2>

                  <p className="text-orange-500 font-semibold tracking-wide text-sm md:text-lg">
                    {t(`artisans.${artisan.roleKey}`)}
                  </p>
                </div>

                {/* HOVER CONTENT */}
                <div className="absolute inset-0 bg-orange-500 flex flex-col items-center justify-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-white mb-2">
                    {artisan.name}
                  </h2>

                  <p className="text-white text-sm md:text-xl font-semibold mb-6">
                    {t(`artisans.${artisan.roleKey}`)}
                  </p>

                  <p className="text-white/90 leading-8 text-lg max-w-sm">
                    {t(`artisans.${artisan.descriptionKey}`)}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex items-center gap-5 mt-10">
                    <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 text-white flex items-center justify-center transition duration-300 cursor-pointer">
                      <FaFacebookF />
                    </button>

                    <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 text-white flex items-center justify-center transition duration-300 cursor-pointer">
                      <FaInstagram />
                    </button>

                    <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 text-white flex items-center justify-center transition duration-300 cursor-pointer">
                      <FaTelegramPlane />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default OurArtisansPage;
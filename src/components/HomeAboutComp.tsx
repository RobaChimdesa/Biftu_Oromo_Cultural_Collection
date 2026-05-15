import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { App_Routes } from "../utils/app-routes";
const HomeAboutCom = () => {
  const { t } = useTranslation("about");
  const navigate = useNavigate();

  return (
    <section className="py-4 px-4 md:px-32 overflow-hidden cursor-auto md:mx-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-0">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* TITLE */}
            <div className="space-y-1">
              <h2 className="text-xl md:text-xl font-semibold text-[#111827] leading-tight uppercase">
                {t('badge')}
              </h2>

              <div className="flex items-center gap-6">
                <h1 className="text-xl md:text-xl font-semibold text-orange-500">
                  {t('title')}
                </h1>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-sm md:text-sm  max-w-2xl serif">
              {t('description')}
            </p>

            {/* BUTTON */}
            <button 
              className="group flex items-center gap-3 text-orange-500 font-semibold text-xl hover:text-orange-600 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(App_Routes.ABOUT)}
            >
              <span className="cursor-pointer group-hover:translate-x-2 transition duration-300">
                {t('readMore')}
              </span>
              <FiArrowRight
                size={28}
                className="group-hover:translate-x-2 transition duration-300"
              />
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full flex justify-center m-2 group perspective-[1200px]">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full scale-90 group-hover:scale-110 transition duration-700"></div>

            {/* Image Card */}
            <div className="relative overflow-hidden m-9 rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:rotate-y-6 group-hover:-translate-y-3 group-hover:scale-105">
              {/* Image */}
              <img
                src="https://res.cloudinary.com/dpc9pnok7/image/upload/v1777636957/1st_mzvgmy.png"
                alt={t('imageAlt')}
                className="w-full max-w-[450px] h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutCom;
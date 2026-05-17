import { useTranslation } from "react-i18next";
import {
  FaLeaf,
  FaHandshake,
  FaGem,
} from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";

const CoreValuesPage = () => {
  const { t } = useTranslation("corevalues");

  const values = [
    {
      id: 1,
      icon: <GiRibbonMedal />,
      title: t("values.authenticity.title"),
      description: t("values.authenticity.description"),
    },
    {
      id: 2,
      icon: <FaLeaf />,
      title: t("values.sustainability.title"),
      description: t("values.sustainability.description"),
    },
    {
      id: 3,
      icon: <FaHandshake />,
      title: t("values.community.title"),
      description: t("values.community.description"),
    },
    {
      id: 4,
      icon: <FaGem />,
      title: t("values.quality.title"),
      description: t("values.quality.description"),
    },
  ];

  return (
    <>

      <section className=" bg-[#0d0b2b] py-24 md:py-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="text-center mb-20 animate-fade-up">
            <p className="text-[#ff4d5a] uppercase tracking-[6px] font-semibold text-sm md:text-base mb-5">
              {t("badge")}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold text-white font-serif">
              {t("title")}
            </h1>

            {/* UNDERLINE */}
            <div className="w-28 h-1 bg-[#ff4d5a] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="bg-[#2b2b2b] rounded-[2rem] px-4 py-8 text-center hover:-translate-y-4 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(255,77,90,0.15)] group animate-fade-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* ICON */}
                <div className="text-3xl mb-4 flex justify-center text-[#ff4d5a] group-hover:scale-125 group-hover:rotate-6 transition duration-500">
                  {value.icon}
                </div>

                {/* TITLE */}
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {value.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm md:text-lg font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default CoreValuesPage;
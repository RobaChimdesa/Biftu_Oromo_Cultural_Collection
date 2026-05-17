import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { App_Routes } from "../../utils/app-routes";

const JoinOurJourneyPage = () => {
  const { t } = useTranslation("joinus");
  const navigate = useNavigate();

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0b2d] py-28 px-4 md:px-10">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-orange-900/40 to-black opacity-80"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* TESTIMONIAL CARD */}
          <div className="bg-[#2b2b2b]/90 backdrop-blur-md rounded-[40px] p-8 md:p-7 shadow-2xl mb-12 hover:-translate-y-2 transition duration-500">
            <div className="flex flex-col items-center text-center">
              {/* QUOTE */}
              <div className="text-2xl text-orange-500 font-serif leading-none mb-3 animate-pulse">
                "
              </div>

              <p className="text-white text-sm md:text-xl italic leading-[2.3rem] max-w-4xl">
                {t("joinJourney.testimonial")}
              </p>

              {/* USER */}
              <div className="mt-10 flex flex-col md:flex-row items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt="Customer"
                  className="w-20 h-20 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                />

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white">
                    Dr. Aster Bekele
                  </h3>

                  <p className="text-gray-300 mt-1">
                    {t("joinJourney.customer")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-serif font-bold text-white mb-8 animate-[fadeInUp_1s_ease]">
              {t("joinJourney.title")}
            </h1>

            <p className="text-gray-300 text-sm md:text-xl max-w-3xl mx-auto  mb-12">
              {t("joinJourney.description")}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* EXPLORE */}
              <button
                onClick={() => navigate(App_Routes.PRODUCTS)}
                className="bg-gradient-to-r from-orange-500 to-orange-500 hover:scale-105 hover:shadow-orange-500/40 shadow-xl text-white md:px-4 md:px-8 md:py-3 rounded-full text-lg font-semibold transition duration-500 cursor-pointer"
              >
                {t("joinJourney.explore")}
              </button>

              {/* WORKSHOP */}
              <button
                onClick={() => navigate(App_Routes.CONTACT)}
                className="border-2  text-white hover:bg-orange-500  hover:text-white px-6 md:px-8 md:py-3 rounded-full text-lg font-semibold transition duration-500 hover:scale-105 cursor-pointer"
              >
                {t("joinJourney.workshop")}
              </button>
            </div>
          </div>
        </div>

        {/* CUSTOM ANIMATION */}
        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(50px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default JoinOurJourneyPage;

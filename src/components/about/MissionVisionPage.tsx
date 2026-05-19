import { useTranslation } from "react-i18next";

const MissionVisionPage = () => {
  const { t } = useTranslation("mission");

  return (
    <>

      <section className=" bg-gradient-to-br from-[#ff3c5f] via-[#ff5b5b] to-[#ff8b4d] py-5 px-4 md:px-10  overflow-hidden">
        <div className="md:my-16 mx-3 md:mx-24">
          
          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* MISSION CARD */}
            <div className="bg-white  rounded-[40px] md:mb-0 px-8 md:px-7 py-7 text-center shadow-2xl hover:-translate-y-4 transition-all duration-700 group animate-[fadeUp_1s_ease]">
              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-3xl group-hover:rotate-12 transition duration-700 animate-bounce">
                  🎯
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4d67] font-serif mb-10">
                {t("mission.title")}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-xl font-serif font-light">
                {t("mission.description")}
              </p>
            </div>

            {/* VISION CARD */}
            <div className="bg-white  rounded-[40px] md:mb-0 px-8 md:px-7 py-7 text-center shadow-2xl hover:-translate-y-4 transition-all duration-700 group animate-[fadeUp_1s_ease]">
              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-700 animate-pulse">
                  👁️
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4d67] font-serif mb-10">
                {t("vision.title")}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-xl font-serif font-light">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-80px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default MissionVisionPage;

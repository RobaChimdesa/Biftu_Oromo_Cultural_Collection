import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

const OurJourneyPage = () => {
  const { t } = useTranslation("ourjourny");

  const stats = [
    {
      number: 5000,
      label: t("stats.customers"),
    },
    {
      number: 200,
      label: t("stats.designs"),
    },
    {
      number: 50,
      label: t("stats.artisans"),
    },
    {
      number: 10,
      label: t("stats.years"),
    },
  ];

  return (
    <>

      <section className="min-h-screen bg-[#0b0b2d] overflow-hidden py-20 px-4 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8 animate-[fadeUp_1s_ease]">
            
            {/* SMALL TITLE */}
            <div>
              <p className="uppercase tracking-[5px] text-[#ff4d67] font-semibold text-sm">
                {t("smallTitle")}
              </p>
            </div>

            {/* MAIN TITLE */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-light leading-tight text-white font-serif uppercase">
                {t("title1")}
                <br />
                <span className="text-[#ff7a59]">
                  {t("title2")}
                </span>
              </h1>

              {/* LINE */}
              <div className="w-28 h-1 bg-[#ff4d67] rounded-full"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-3 text-gray-300 text-lg leading-[1.8rem]">
              <p>
                {t("description1")}
              </p>

              <p>
                {t("description2")}
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a3d] rounded-3xl p-6 text-center shadow-lg hover:-translate-y-2 transition duration-500"
                >
                  <h2 className="text-2xl md:text-2xl font-bold text-[#ff4d67]">
                    <Counter end={item.number} />
                  </h2>

                  <p className="text-gray-300 mt-3 text-sm leading-6">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative group animate-[fadeIn_1.5s_ease]">
            
            {/* GLOW */}
            <div className="absolute inset-0 bg-[#ff7a59]/20 blur-3xl rounded-[40px] scale-90 group-hover:scale-105 transition duration-700"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src="https://res.cloudinary.com/dpc9pnok7/image/upload/v1777636929/7th_oyyc3l.png"
                alt="Biftu Oromo Cultural Cloth"
                className="w-full h-[750px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* BADGE */}
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-6 py-4 rounded-full text-white font-semibold shadow-xl animate-pulse">
                🌸 {t("badge")}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(80px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default OurJourneyPage;
import { useNavigate } from "react-router-dom";
import { App_Routes } from "../utils/app-routes";
import { clothes } from "../models/products";
import { useTranslation } from "react-i18next";

const HomeProductComp = () => {
  const { t } = useTranslation("HomeProductPageCom");
  const navigate = useNavigate();

  const featuredProducts = [
    clothes.find((item) => item.category.trim() === "women"),
    clothes.find((item) => item.category.trim() === "men"),
    clothes.find((item) => item.category.trim() === "child"),

    clothes.find((item) => item.id === 4),
    clothes.find((item) => item.id === 14),
    clothes.find((item) => item.id === 24),

    clothes.find((item) => item.id === 8),
    clothes.find((item) => item.id === 18),
  ].filter(Boolean);

  // Translation map for product names
  const productTranslations: Record<number, string> = {
    1: t("products.womenShoa"),
    4: t("products.womenHarar"),
    8: t("products.womenWedding"),

    13: t("products.menShoa"),
    14: t("products.menArsi"),
    18: t("products.menGuji"),

    21: t("products.childCloth"),
    24: t("products.childCloth"),
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-4 md:px-16 mx-auto cursor-auto">
      {/* SECTION TITLE */}
      <div className="flex flex-col items-center justify-center mb-14">
        <span className="text-orange-500 uppercase tracking-[6px] font-bold text-sm">
          {t("section.title")}
        </span>

        <div className="w-24 h-1 bg-orange-500 mt-8 rounded-full" />
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-26 md:mx-28  md:w-230">
        {featuredProducts.map((item: any) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 cursor-pointer"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden ">
              {/* NEW BADGE */}
              <span className="absolute top-4 left-4 z-20 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wide">
                {t("product.new")}
              </span>

              {/* PRODUCT IMAGE */}
              <img
                src={item.image}
                alt={productTranslations[item.id] || item.name}
                className="w-full h-80 md:h-100 object-cover group-hover:scale-105 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute  inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* PRODUCT INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm px-4 py-3 text-white translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="font-semibold text-sm md:text-base line-clamp-1">
                  {productTranslations[item.id] || item.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-orange-300 font-bold">{item.price} ETB</p>

                  <button className="bg-orange-500 hover:bg-orange-600 transition px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="cursor-pointer">
                      {t("product.quickView")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-16">
        <button
          onClick={() => navigate(App_Routes.PRODUCTS)}
          className="group border-2 border-[#1f1f39] rounded-full px-5 md:px-8 py-2 text-xl md:text-xl font-semibold text-[#1f1f39] hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="flex items-center gap-3 cursor-pointer">
            {t("product.browseMore")}

            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeProductComp;

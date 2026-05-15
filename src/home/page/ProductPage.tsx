import { useState } from "react";
import { clothes } from "../../models/products";
import ProductCard from "../../components/ui/ProductCard";
import { useTranslation } from "react-i18next";
import Header from "../../module/common/Header";
import Footer from "../../module/common/Footer";

const ProductPage = () => {
  const { t } = useTranslation("products");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "women",
    "men",
    "child",
  ];

  const filteredProducts = clothes.filter((item) => {
    const matchCategory =
      selectedCategory === "all"
        ? true
        : item.category.trim() === selectedCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
   <>
   <Header />
    <section className="w-full min-h-screen bg-[#f8f8f8] py-28 px-4 md:px-12 cursor-auto">
      
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center mb-14 ">
        <h2 className="text-1xl md:text-3xl font-bold text-[#7c3f31] text-center">
          {t("title")}
        </h2>

        <div className="w-28 h-1 bg-orange-500 rounded-full mt-6"></div>
      </div>

      {/* FILTER + SEARCH */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 cursor-auto md:mx-18">
        
        {/* SEARCH */}
        <div className="w-full lg:w-[350px]  ">
          <input
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-3 py-1 outline-none focus:border-orange-500 text-lg bg-white shadow-sm cursor-text"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-1 rounded-full border text-sm font-semibold transition duration-300 cursor-pointer
              ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                  : "bg-white text-[#1d1d1d] border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
              }`}
            >
             <span className="cursor-pointer"> {t(category)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:gap-5  md:mx-20">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* EMPTY */}
      {filteredProducts.length === 0 && (
        <div className="flex justify-center items-center py-20">
          <h2 className="text-2xl text-gray-500">
            {t("notFound")}
          </h2>
        </div>
      )}
    </section>
    <Footer />
   </>
  );
};

export default ProductPage;
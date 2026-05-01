import { useState } from "react";
// import { clothes } from "../data/clothes";
import { clothes } from "./models/products";

const TestGallery = () => {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? clothes.slice(0, 12) // show only some for testing
      : clothes.filter((item) => item.category.trim() === category).slice(0, 12);

  return (
    <div className="p-4">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["all", "women", "men", "child"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              category === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-2">
              <p className="text-sm font-semibold line-clamp-1">
                {item.name}
              </p>

              <p className="text-orange-600 font-bold text-sm">
                {item.price} ETB
              </p>

              <p className="text-xs text-gray-500 capitalize">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestGallery;
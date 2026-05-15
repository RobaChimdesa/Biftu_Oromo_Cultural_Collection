import { FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type ProductProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  const { t } = useTranslation("products");

  return (
    <div className="group bg-white rounded-3xl p-5 md:mx-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-100 gap-12 cursor-pointer overflow-hidden w-4/5">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-0 space-y-0">
        <h2 className="text-2xl font-bold text-[#1d1d1d] line-clamp-1">
          {product.name}
        </h2>

        <p className="text-gray-500 capitalize">{t(product.category.trim())}</p>

        <div className="flex items-center justify-between pt-4">
          <span className="text-orange-500 font-bold text-2xl">
            ETB {product.price}
          </span>

          <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition duration-300 cursor-pointer shadow-lg">
            <span className="cursor-pointer"><FiPlus size={22} /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { ShoppingCart } from "lucide-react";

const Cart = () => {
    return(
         <div className="relative cursor-pointer">
      {/* Cart Icon */}
      <ShoppingCart
        size={22}
        className="text-orange-500 hover:text-orange-600 transition"
      />

      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-[2px] rounded-full leading-none">
        0
      </span>
    </div>
    )
}

export default Cart;
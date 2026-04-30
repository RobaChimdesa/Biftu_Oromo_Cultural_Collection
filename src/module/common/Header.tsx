import Logo from "./Logo";
import Cart from "../../components/ui/Cart";
const Header = () => {
  return (
    <div className="flex flex-row items-cneter justify-between w-full py-6 px-4 shadow-xl">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row items-center justify-center gap-6 font-semibold ">
        <button className="background-transparent border-none outline-none cursor-pointer">
          <span className="cursor-pointer hover:text-orange-500">Home</span>
        </button>
        <div className="relative group">
          <button>
            <span className="cursor-pointer hover:text-orange-500">
              Products
            </span>
          </button>
        </div>
        <button>
          <span className="cursor-pointer hover:text-orange-500">About Us</span>
        </button>
        <button>
          <span className="cursor-pointer hover:text-orange-500">Contact</span>
        </button>
        <Cart />
        <button>
          <select className="text-orange-500 background-transparent border-none outline-none cursor-pointer">
            <option value="en">English</option>
            <option value="or">Oromo</option>
            <option value="am">Amharic</option>
          </select>
        </button>
      </div>
    </div>
  );
};

export default Header;

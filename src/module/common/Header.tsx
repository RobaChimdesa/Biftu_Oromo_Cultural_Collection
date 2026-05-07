import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Cart from "../../components/ui/Cart";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { t, i18n } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Red Progress Bar - ABOVE the header */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-60">
        <div
          className="h-full bg-red-400 transition-all duration-300 ease-in-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <header className="fixed top-1 left-0  w-full shadow-xl bg-white cursor-progress z-50">
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 ">
            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("home")}
              </span>
            </button>

            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("products")}
              </span>
            </button>

            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("aboutUs")}
              </span>
            </button>

            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("contact")}
              </span>
            </button>

            <Cart />

            {/* Language */}
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="text-orange-500 border border-orange-300 rounded-md px-2 py-1"
            >
              <option value="en">English</option>
              <option value="om">Oromo</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-orange-500 cursor-pointer md:hidden"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col  gap-4 px-4 pb-4 md:hidden items-center ">
            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("home")}
              </span>
            </button>
            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("products")}
              </span>
            </button>
            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("aboutUs")}
              </span>
            </button>
            <button>
              <span className="hover:text-orange-500 transition cursor-pointer">
                {t("contact")}
              </span>
            </button>

            <Cart />

            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="text-orange-500 border border-orange-300 rounded-md px-2 py-1"
            >
              <option value="en">English</option>
              <option value="om">Oromo</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

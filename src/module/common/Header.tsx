// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import Cart from "../../components/ui/Cart";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { App_Routes } from "../../utils/app-routes";

// const Header = () => {

//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation("header");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("preferred-language", lang);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Red Progress Bar - ABOVE the header */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-60">
//         <div
//           className="h-full bg-orange-500 transition-all duration-300 ease-in-out"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>
//       <header className="fixed top-1 left-0  w-full shadow-xl bg-white cursor-progress z-50">
//         <div className="flex items-center justify-between py-4 px-4 md:px-8">
//           {/* Logo */}
//           <Logo />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6 ">
//             <button onClick={() => navigate(App_Routes.HOME)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("home")}
//               </span>
//             </button>

//             <button onClick={() => navigate(App_Routes.PRODUCTS)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("products")}
//               </span>
//             </button>

//             <button onClick={() => navigate(App_Routes.ABOUT)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("aboutUs")}
//               </span>
//             </button>

//             <button onClick={() => navigate(App_Routes.CONTACT)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("contact")}
//               </span>
//             </button>

//             <Cart />

//             {/* Language */}
//             <select
//               value={i18n.language}
//               onChange={(e) => changeLanguage(e.target.value)}
//               className="text-orange-500 border border-orange-300 rounded-md px-2 py-1"
//             >
//               <option value="en">English</option>
//               <option value="om">Oromo</option>
//               <option value="am">አማርኛ</option>
//             </select>
//           </div>

//           {/* Mobile Menu Button */}

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-2xl text-orange-500 cursor-pointer md:hidden"
//           >
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="flex flex-col  gap-4 px-4 pb-4 md:hidden items-center ">
//             <button onClick={() => navigate(App_Routes.HOME)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("home")}
//               </span>
//             </button>
//             <button onClick={() => navigate(App_Routes.PRODUCTS)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("products")}
//               </span>
//             </button>
//             <button onClick={() => navigate(App_Routes.ABOUT)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("aboutUs")}
//               </span>
//             </button>
//             <button onClick={() => navigate(App_Routes.CONTACT)}>
//               <span className="hover:text-orange-500 transition cursor-pointer">
//                 {t("contact")}
//               </span>
//             </button>

//             <Cart />

//             <select
//               value={i18n.language}
//               onChange={(e) => changeLanguage(e.target.value)}
//               className="text-orange-500 border border-orange-300 rounded-md px-2 py-1"
//             >
//               <option value="en">English</option>
//               <option value="om">Oromo</option>
//               <option value="am">አማርኛ</option>
//             </select>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Cart from "../../components/ui/Cart";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { App_Routes } from "../../utils/app-routes";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation("header");

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  // ACTIVE LINK STYLE
  const activeLink = (path: string) => {
    return location.pathname === path
      ? "text-orange-500 font-semibold"
      : "text-black hover:text-orange-500";
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
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-in-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* HEADER */}
      <header className="fixed top-1 left-0 w-full shadow-xl bg-white cursor-auto z-50">
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          
          {/* LOGO */}
          <Logo />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            
            <button onClick={() => navigate(App_Routes.HOME)}>
              <span
                className={`${activeLink(
                  App_Routes.HOME
                )} transition duration-300 cursor-pointer`}
              >
                {t("home")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.PRODUCTS)}>
              <span
                className={`${activeLink(
                  App_Routes.PRODUCTS
                )} transition duration-300 cursor-pointer`}
              >
                {t("products")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.ABOUT)}>
              <span
                className={`${activeLink(
                  App_Routes.ABOUT
                )} transition duration-300 cursor-pointer`}
              >
                {t("aboutUs")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.CONTACT)}>
              <span
                className={`${activeLink(
                  App_Routes.CONTACT
                )} transition duration-300 cursor-pointer`}
              >
                {t("contact")}
              </span>
            </button>

            <Cart />

            {/* LANGUAGE */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-orange-500 cursor-pointer md:hidden"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="flex flex-col gap-4 px-4 pb-4 md:hidden items-center">
            
            <button onClick={() => navigate(App_Routes.HOME)}>
              <span
                className={`${activeLink(
                  App_Routes.HOME
                )} transition duration-300 cursor-pointer`}
              >
                {t("home")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.PRODUCTS)}>
              <span
                className={`${activeLink(
                  App_Routes.PRODUCTS
                )} transition duration-300 cursor-pointer`}
              >
                {t("products")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.ABOUT)}>
              <span
                className={`${activeLink(
                  App_Routes.ABOUT
                )} transition duration-300 cursor-pointer`}
              >
                {t("aboutUs")}
              </span>
            </button>

            <button onClick={() => navigate(App_Routes.CONTACT)}>
              <span
                className={`${activeLink(
                  App_Routes.CONTACT
                )} transition duration-300 cursor-pointer`}
              >
                {t("contact")}
              </span>
            </button>

            <Cart />

            {/* LANGUAGE */}
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
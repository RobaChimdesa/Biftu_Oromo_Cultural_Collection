// import { useTranslation } from "react-i18next";
// import { useEffect } from "react";
// import Logo from "./Logo";
// import Cart from "../../components/ui/Cart";

// const Header = () => {
//   const { t, i18n } = useTranslation("header"); // Specify 'header' namespace

//   // Handle language change
//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("preferred-language", lang);
//   };

//   // Load saved language on component mount
//   useEffect(() => {
//     const savedLang = localStorage.getItem("preferred-language");
//     if (savedLang && savedLang !== i18n.language) {
//       i18n.changeLanguage(savedLang);
//     }
//   }, [i18n]);

//   return (
//     <div className="flex flex-row items-center justify-between w-full py-6 px-4 shadow-xl bg-white">
//       <div>
//         <Logo />
//       </div>
//       <div className="flex flex-row items-center justify-center gap-6 font-semibold">
//         <button className="background-transparent border-none outline-none cursor-pointer">
//           <span className="cursor-pointer hover:text-orange-500 transition-colors duration-200">
//             {t("home")}
//           </span>
//         </button>

//         <div className="relative group">
//           <button className="background-transparent border-none outline-none cursor-pointer">
//             <span className="cursor-pointer hover:text-orange-500 transition-colors duration-200">
//               {t("products")}
//             </span>
//           </button>
//         </div>

//         <button className="background-transparent border-none outline-none cursor-pointer">
//           <span className="cursor-pointer hover:text-orange-500 transition-colors duration-200">
//             {t("aboutUs")}
//           </span>
//         </button>

//         <button className="background-transparent border-none outline-none cursor-pointer">
//           <span className="cursor-pointer hover:text-orange-500 transition-colors duration-200">
//             {t("contact")}
//           </span>
//         </button>

//         <Cart />

//         {/* Language Switcher */}
//         <div className="relative">
//           <select
//             value={i18n.language}
//             onChange={(e) => changeLanguage(e.target.value)}
//             className="text-orange-500 bg-transparent border border-orange-300 rounded-md px-2 py-1 outline-none cursor-pointer hover:border-orange-500 transition-colors duration-200 focus:ring-2 focus:ring-orange-300"
//             aria-label="Change language"
//           >
//             <option value="en" className="text-gray-700">
//               English
//             </option>
//             <option value="om" className="text-gray-700">
//               Oromo
//             </option>
//             <option value="am" className="text-gray-700">
//               አማርኛ
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
// import Logo from "./Logo";
// import Cart from "../../components/ui/Cart";

// const Header = () => {
//   const { t, i18n } = useTranslation("header");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const languages = [
//     { code: "en", name: "English", flag: "🇬🇧", label: "English" },
//     { code: "om", name: "Oromoo", flag: "🇪🇹", label: "Oromoo" },
//     { code: "am", name: "አማርኛ", flag: "🇪🇹", label: "አማርኛ" },
//   ];

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("preferred-language", lang);
//     setIsLanguageOpen(false);
//   };

//   useEffect(() => {
//     const savedLang = localStorage.getItem("preferred-language");
//     if (savedLang && savedLang !== i18n.language) {
//       i18n.changeLanguage(savedLang);
//     }
//   }, [i18n]);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when window resizes to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const currentLanguage = languages.find((lang) => lang.code === i18n.language);

//   const navLinks = [
//     { key: "home", href: "/" },
//     { key: "products", href: "/products" },
//     { key: "aboutUs", href: "/about" },
//     { key: "contact", href: "/contact" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
//             : "bg-white shadow-xl py-6"
//         }`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="shrink-0">
//               <Logo />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.key}
//                   href={link.href}
//                   className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
//                 >
//                   {t(link.key)}
//                 </a>
//               ))}
//             </nav>

//             {/* Desktop Right Section */}
//             <div className="hidden md:flex items-center gap-4 lg:gap-6">
//               <Cart />

//               {/* Language Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//                   className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-all duration-200 border border-orange-200"
//                 >
//                   <FiGlobe className="text-orange-500" />
//                   <span className="text-sm font-medium hidden lg:inline">
//                     {currentLanguage?.flag} {currentLanguage?.name}
//                   </span>
//                   <span className="text-sm font-medium lg:hidden">
//                     {currentLanguage?.flag}
//                   </span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? "rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {isLanguageOpen && (
//                   <>
//                     <div
//                       className="fixed inset-0 z-10"
//                       onClick={() => setIsLanguageOpen(false)}
//                     />
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden animate-fadeIn">
//                       {languages.map((lang) => (
//                         <button
//                           key={lang.code}
//                           onClick={() => changeLanguage(lang.code)}
//                           className={`flex items-center w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors ${
//                             i18n.language === lang.code
//                               ? "bg-orange-50 text-orange-600"
//                               : "text-gray-700"
//                           }`}
//                         >
//                           <span className="text-xl mr-3">{lang.flag}</span>
//                           <span className="flex-1">{lang.label}</span>
//                           {i18n.language === lang.code && (
//                             <svg
//                               className="w-4 h-4 text-orange-600"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M5 13l4 4L19 7"
//                               />
//                             </svg>
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex md:hidden items-center gap-4">
//               <Cart />
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-orange-500 focus:outline-none transition-colors duration-200"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu */}
//           <div
//             className={`md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
//               isMenuOpen
//                 ? "opacity-100 translate-y-0 visible"
//                 : "opacity-0 -translate-y-full invisible"
//             }`}
//             style={{ top: isScrolled ? "56px" : "72px" }}
//           >
//             <nav className="flex flex-col py-4 px-4">
//               {navLinks.map((link, index) => (
//                 <a
//                   key={link.key}
//                   href={link.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 ${
//                     index !== navLinks.length - 1
//                       ? "border-b border-gray-100"
//                       : ""
//                   }`}
//                 >
//                   <span className="font-medium">{t(link.key)}</span>
//                 </a>
//               ))}

//               {/* Mobile Language Selector */}
//               <div className="mt-4 pt-4 border-t border-gray-200">
//                 <div className="px-4 mb-2 text-sm text-gray-500 font-medium">
//                   Select Language
//                 </div>
//                 <div className="grid grid-cols-3 gap-2">
//                   {languages.map((lang) => (
//                     <button
//                       key={lang.code}
//                       onClick={() => {
//                         changeLanguage(lang.code);
//                         setIsMenuOpen(false);
//                       }}
//                       className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
//                         i18n.language === lang.code
//                           ? "bg-orange-100 text-orange-600 border border-orange-300"
//                           : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-orange-50"
//                       }`}
//                     >
//                       <span className="text-2xl">{lang.flag}</span>
//                       <span className="text-xs">{lang.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Spacer to prevent content from hiding under fixed header */}
//       <div
//         className={`${isScrolled ? "h-14" : "h-20"} md:${isScrolled ? "h-14" : "h-24"}`}
//       />
//     </>
//   );
// };

// export default Header;

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Cart from "../../components/ui/Cart";
import { FiMenu, FiX} from "react-icons/fi";

const Header = () => {
  const { t, i18n } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="w-full shadow-xl bg-white cursor-progress">
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
          <button><span className="hover:text-orange-500 transition cursor-pointer">{t("home")}</span></button>
          <button><span className="hover:text-orange-500 transition cursor-pointer">{t("products")}</span></button>
          <button><span className="hover:text-orange-500 transition cursor-pointer">{t("aboutUs")}</span></button>
          <button><span className="hover:text-orange-500 transition cursor-pointer">{t("contact")}</span></button>

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
    </div>
  );
};

export default Header;

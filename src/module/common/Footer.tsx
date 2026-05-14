import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation("footer");

  const quickLinks = [
    { key: "home", href: "/" },
    { key: "products", href: "/products" },
    { key: "aboutUs", href: "/about" },
    { key: "contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com",
      hover: "hover:bg-pink-600",
    },

    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
      hover: "hover:bg-blue-600",
    },

    {
      name: "Telegram",
      icon: FaTelegramPlane,
      href: "https://telegram.org",
      hover: "hover:bg-sky-500",
    },
  ];

  return (
    <footer className="w-full bg-[#1f1f1f] text-gray-300 pt-6 pb-2 px-4 md:px-12 overflow-hidden cursor-auto">
      <div className="max-w-5xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              BIFTU
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 rounded-full"></div>

            <p className="text-gray-200 leading-9 text-sm">
              Ethiopian Oromo traditional clothing handcrafted with love,
              culture, and authentic heritage.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-gray-50 mb-8 relative inline-block">
              {t("quickLinks.title")}

              <span className="absolute -bottom-3 left-0 w-14 h-[3px] bg-orange-500 rounded-full"></span>
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-orange-500 transition-all duration-300 text-sm flex items-center gap-3 "
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition duration-300 "></span>
                   <span className="cursor-pointer"> {t(`quickLinks.${link.key}`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="">
            <h3 className="text-xl font-bold text-gray-50 mb-8 relative inline-block">
              {t("contact.title")}

              <span className="absolute -bottom-3 left-0 w-14 h-[3px] bg-orange-500 rounded-full"></span>
            </h3>

            <div className="space-y-1">
              <div className="flex items-start gap-1 group">
                <div className="bg-orange-500/10 p-3 rounded-full group-hover:bg-orange-500 transition duration-300">
                  <FaMapMarkerAlt className="text-orange-500 group-hover:text-white" />
                </div>

                <p className="text-gray-200 leading-8 text-sm">
                  5th Floor, Jan Meda Dashin Bank Building <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-orange-500/10 p-3 rounded-full group-hover:bg-orange-500 transition duration-300">
                  <FaPhoneAlt className="text-orange-500 group-hover:text-white" />
                </div>

                <p className="text-gray-200 text-sm">+2519xxxxxxxx</p>
              </div>

              <div className="flex items-center gap-1 group">
                <div className="bg-orange-500/10 p-3 rounded-full group-hover:bg-orange-500 transition duration-300">
                  <FaEnvelope className="text-orange-500 group-hover:text-white" />
                </div>

                <p className="text-gray-200 text-sm">
                  info@biftucollections.com
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-bold text-gray-50 mb-8 relative inline-block">
              {t("social.title")}

              <span className="absolute -bottom-3 left-0 w-14 h-[3px] bg-orange-500 rounded-full"></span>
            </h3>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-200 ${social.hover} hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            {/* SMALL TEXT */}
            <div className="mt-8">
              <p className="text-gray-200 leading-8 text-sm">
                Follow us on social media to discover the newest Oromo cultural
                collections and fashion inspiration.
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gray-800 my-4"></div>

        {/* BOTTOM */}
        <div className=" items-center justify-center gap-5">
          <p className="text-gray-300  text-center text-sm">
            © {new Date().getFullYear()} BIFTU Oromo Cultural Clothes.{" "}
            {t("copyright")}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
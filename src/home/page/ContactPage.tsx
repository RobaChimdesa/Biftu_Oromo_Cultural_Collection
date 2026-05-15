import { useTranslation } from "react-i18next";
import Header from "../../module/common/Header";
import Footer from "../../module/common/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Header />

      <section className="w-full bg-[#f5f5f5] py-20 px-4 md:px-10 cursor-auto">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <div className="text-center my-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600  font-serif">
              {t("title")}
            </h2>

            <p className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
              {/* ADDRESS */}
              <div className="flex gap-4 mb-10">
                <div className="text-orange-500 text-xl mt-1">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827] text-lg">
                    {t("showroom")}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-2">
                    {t("address.line1")}
                    <br />
                    {t("address.line2")}
                  </p>
                </div>
              </div>

              {/* CALL */}
              <div className="flex gap-4 mb-10">
                <div className="text-orange-500 text-xl mt-1">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827] text-lg">
                    {t("call")}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-2">
                    +2519xxxxxxxx
                    <br />
                    +2519xxxxxxxx
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4 mb-10">
                <div className="text-orange-500 text-xl mt-1">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827] text-lg">
                    {t("email")}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-2">
                    info@kutacollections.com
                    <br />
                    sales@kutacollections.com
                  </p>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="flex gap-4 mb-10">
                <div className="text-orange-500 text-xl mt-1">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827] text-lg">
                    {t("businessHours")}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-2">
                    {t("hours.weekdays")}
                    <br />
                    {t("hours.saturday")}
                    <br />
                    {t("hours.sunday")}
                  </p>
                </div>
              </div>

              {/* FOLLOW */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-[#111827] mb-5">
                  {t("follow")}
                </h3>

                <div className="flex items-center gap-4">
                  <button className="w-11 h-11 rounded-full border-2 border-[#1f2937] flex items-center justify-center bg-orange-500 text-white hover:scale-110 transition duration-300 cursor-pointer">
                    <FaFacebookF />
                  </button>

                  <button className="w-11 h-11 rounded-full border-2 border-[#1f2937] flex items-center justify-center bg-orange-500 text-white hover:scale-110 transition duration-300 cursor-pointer">
                    <FaInstagram />
                  </button>

                  <button className="w-11 h-11 rounded-full border-2 border-[#1f2937] flex items-center justify-center bg-orange-500 text-white hover:scale-110 transition duration-300 cursor-pointer">
                    <FaTelegramPlane />
                  </button>

                  <button className="w-11 h-11 rounded-full border-2 border-[#1f2937] flex items-center justify-center bg-orange-500 text-white hover:scale-110 transition duration-300 cursor-pointer">
                    <FaTiktok />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block text-[#111827] font-semibold mb-3">
                    {t("form.name")}
                  </label>

                  <input
                    type="text"
                    placeholder={t("form.namePlaceholder")}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition duration-300 cursor-text caret-black text-black bg-white"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-[#111827] font-semibold mb-3">
                    {t("form.email")}
                  </label>

                  <input
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition duration-300 cursor-text caret-black text-black bg-white"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-[#111827] font-semibold mb-3">
                    {t("form.message")}
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition duration-300 resize-none caret-black text-black bg-white"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full transition duration-300 shadow-md hover:shadow-xl cursor-pointer">
                  {t("form.button")} ✨
                </button>
              </form>
            </div>
          </div>

          {/* MAP SECTION */}
          <div className="mt-10 bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-center text-2xl font-semibold text-orange-500 mb-6">
              {t("mapTitle")}
            </h2>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=addis%20ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* LOCATION BAR */}
            <div className="mt-6 bg-[#fafafa] rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                📍 {t("location")}
              </p>

              <a
                href="https://www.google.com/maps?q=Jan+Meda+Dashin+Bank+Building+Addis+Ababa+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full transition duration-300 cursor-pointer"
              >
                {t("direction")} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
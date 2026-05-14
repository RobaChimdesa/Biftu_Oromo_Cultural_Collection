import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { FiTruck, FiShield, FiAward, FiRefreshCw } from "react-icons/fi";

const FeaturesSection = () => {
  const { t } = useTranslation('features');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: FiTruck,
      titleKey: "fastDelivery.title",
      descriptionKey: "fastDelivery.description",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      delay: 0
    },
    {
      id: 2,
      icon: FiShield,
      titleKey: "securePayment.title",
      descriptionKey: "securePayment.description",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      delay: 100
    },
    {
      id: 3,
      icon: FiAward,
      titleKey: "qualityGuarantee.title",
      descriptionKey: "qualityGuarantee.description",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      delay: 200
    },
    {
      id: 4,
      icon: FiRefreshCw,
      titleKey: "easyReturns.title",
      descriptionKey: "easyReturns.description",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-16 px-4 md:px-16 overflow-hidden cursor-alias">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Animation */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-2xl font-light text-gray-700 mb-3">
            {t('sectionTitle')}
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:w-250 md:ml-20 ">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Icon Container */}
              <div className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 `}>
                <feature.icon className={`${feature.iconColor} w-7 h-7  transition-colors duration-300`} />
              </div>

              {/* Title with Red Underline on Hover */}
              <div className="text-center">
                <h3 className="text-lg md:text-sm font-semibold text-gray-800 mb-2 relative inline-block group-hover:text-orange-500 transition-colors duration-300">
                  {t(feature.titleKey)}
                  {/* Red Underline Effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
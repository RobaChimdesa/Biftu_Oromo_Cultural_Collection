import Header from "../../module/common/Header";
import HomePageComp from "../../components/HomePageComp";
import HomeProductComp from "../../components/HomeProductPageCom";
import HomeAboutCom from "../../components/HomeAboutComp";
import FeaturesSection from "../../components/FeaturesSection";
import Footer from "../../module/common/Footer";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <main>
        <HomePageComp />
        <HomeProductComp />
        <HomeAboutCom />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

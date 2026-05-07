import Header from "../../module/common/Header";
import HomePageComp from "../../components/HomePageComp";
import HomeProductComp from "../../components/HomeProductPageCom"
import HomeAboutCom from "../../components/HomeAboutComp";
import Footer from "../../module/common/Footer";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <HomePageComp />
      <HomeProductComp/>
      <HomeAboutCom />
      <Footer />
    </div>
  );
};

export default HomePage;

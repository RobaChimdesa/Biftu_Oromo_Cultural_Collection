import Header from "../../module/common/Header";
import Footer from "../../module/common/Footer";
import CoreValuesPage from "../../components/about/CoreValuesPage";
import JoinOurJourneyPage from "../../components/about/JoinOurJourneyPage";
import MissionVisionPage from "../../components/about/MissionVisionPage";
import OurArtisansPage from "../../components/about/OurArtisansPage";
import OurJourneyPage from "../../components/about/OurJourneyPage";
import OurStoryPage from "../../components/about/OurStoryPage";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="">
        <OurStoryPage/>
        <OurJourneyPage/>
        <MissionVisionPage/>
        <CoreValuesPage/>
        <OurArtisansPage/>
        < JoinOurJourneyPage />
      </main>
      <Footer/>
    </div>
  );
};

export default AboutPage;

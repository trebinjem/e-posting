import { LandingPageWrapper } from "../Personas/Personas.style";
import Footer from "../ResourceMarketPlace/Footer";
import MissionVision from "./MissionVision";
// import NavBar from "../ResourceMarketPlace/NavBar";
import SliderSection from "./SliderSection";

const HowTo = () => {
  return (
    <>
      <LandingPageWrapper>
        <SliderSection />

        <MissionVision />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default HowTo;

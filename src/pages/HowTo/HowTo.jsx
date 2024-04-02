import { LandingPageWrapper } from "../Personas/Personas.style";
import Footer from "../ResourceMarketPlace/Footer";
import Approach from "./Approach";
import JobSection from "./JobSection";
// import NavBar from "../ResourceMarketPlace/NavBar";
import SliderSection from "./SliderSection";

const HowTo = () => {
  return (
    <>
      <LandingPageWrapper>
        <SliderSection />

        <Approach />

        <JobSection />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default HowTo;

import { LandingPageWrapper } from "../Personas/Personas.style";
import Footer from "../ResourceMarketPlace/Footer";
import NavBar from "../ResourceMarketPlace/NavBar";
import UnsuscribeContent from "./UnsuscribeContent";

const Unsubscribe = () => {
  return (
    <>
      <LandingPageWrapper>
        <NavBar />

        <UnsuscribeContent />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default Unsubscribe;

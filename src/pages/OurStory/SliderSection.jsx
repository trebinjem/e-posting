import NavBar from "../ResourceMarketPlace/NavBar";
import { MainPost } from "../landingPage/LandingPage.style";
import InfinityScroll from "./InfinityScroll";
import './ourStory.css'
const SliderSection = () => {
  const headingStyle = {
    color: "#000000",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "center",
  };

  const paraStyle = {
    color: "#000000",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "33px",
    textAlign: "center",
  };

  return (
    <div className="mb-5 w-100postition-relative" style={{ backgroundColor: "#7367F014" }}>
      <NavBar />

      <div className="w-100 ourStory  ">
       
          <h1 className="custom-main-heading my-5" style={headingStyle}>
            We’re here to help with closing jobs
          </h1>
          <p className="custom-main-para my-5" style={paraStyle}>
            We aim to set everyone for success by providing a  <br className="d-block d-md-none " /> platform that
            brings jobs <br className="d-none d-md-block " /> to the mass market.
          </p>
       
      </div>
       <div className=" d-none d-md-block mt-0"> &nbsp;</div>
      <div className="w-100 my-2">
        <InfinityScroll />
      </div>
      <div className="bottom-container"> &nbsp;</div>
    </div>
  );
};

export default SliderSection;

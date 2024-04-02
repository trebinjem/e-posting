import NavBar from "./NavBar";
import { LandingPageWrapper } from "../Personas/Personas.style";
import { Button, MainPost } from "../landingPage/LandingPage.style";
import SnakePath from "./SnakePath";
import AnimatedImage from "./AnimatedImage";
import Footer from "./Footer";
import About from "./About";
import './resourcesMarketplace.css';
const ResourcesMarketplace = () => {
  return (
    <>
      <LandingPageWrapper>
        <NavBar />

        <div className="row pr-0 py-0 mr-0 my-0 resource-market-container align-items-start w-100 custom-column-reverse">
          <div className="col-sm-12 col-md-12 col-lg-6 px-0 pr-lg-3">
           
              <h1 className="fw-bold title-arrow overlay-10" style={{ color: "#4B4B4B" }}>
                We set everyone <br className="d-none d-md-block" /> everywhere for success.
              </h1>
              <p
                className=" text-start eposting-short-dis  "
                style={{ color: "#4B4B4B", lineHeight: "2em" ,fontWeight:600  }}
              >
                ePosting aims to empower job seekers by modernizing the job
                process and harnessing the potential of technology for positive
                change. Our targeted approach and best practices allow us to
                revolutionize the way job seekers approach jobs. Our platform
                offers a dynamic ecosystem of cutting-edge technologies,
                valuable resources, and strategic partnerships, all designed to
                empower every user on their path to success.
              </p>

              <div className="d-flex gap-4 gap-md-4 my-lg-2 my-5 mx-0 w-100 custom-button">
                <Button
                  margin="0 0 24px 0"
                  className="ms-0 blue me-auto first-blue-btn full-width me-lg-0  ml-5 "
                  
                >
                  Get registered
                </Button>
                <Button className="ms-0 blue me-auto me-lg-0 action-btn ml-5" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="mb-1 me-2"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.83325 3.33301V16.6663L16.6666 9.99967L5.83325 3.33301Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  How it works
                </Button>
              </div>
          
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 px-2 mt-4 px-md-4 custom-margin">
            <SnakePath />
          </div>
        </div>

        <div
          className="my-5  md-container-arrow d-flex flex-column align-items-center justify-content-center w-100"
          style={{ backgroundColor: "#A8AAAE14",  }}
        >
          <h1
            className="text-black fw-semibold short-title  px-2 text-center"
            style={{ color: "#4B4B4B" }}
          >
            We’ve made it easy to request for a job
          </h1>

          <p
            className="fw-medium  short-md-title  px-2 my-3 my-md-4  text-center"
            style={{ color: "#242745" }}
          >
            With just a few clicks, you can initiate a targeted job <br className="d-none d-md-block"/>  request,
            saving you time and effort.
          </p>

          <Button
            margin=""
            className="action-btn-sm"
          >
            Learn How
          </Button>
        </div>

        <AnimatedImage />

        <About />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default ResourcesMarketplace;

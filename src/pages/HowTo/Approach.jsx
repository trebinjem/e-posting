import { MainPost } from "../landingPage/LandingPage.style";
import girlMakePainting from "./assets/girlMakePanting.svg";
import "./howTo.css";
const Approach = () => {
  const headingStyle = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "3.5rem",
    lineHeight: "84px",
    textAlign: "start",
    whiteSpace: "nowrap"
  };

  const paraStyle = {
    color: "#4B465C",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "start",
    marginBottom:"25px"
  };

  return (
    <>
      <div className="px-0 px-md-4">
      <div className="row  job-container-how-to align-items-center w-100 custom-row-reverse    " style={{}}>
        <div className="col-sm-12  px-md-4   col-md-12 col-lg-6 d-flex flex-column ">
         
            <div className="w-100 d-flex align-items-start gap-5 px-2 px-lg-5 my-rem-10">
              <div className="w-100 pl-0 pl-lg-5">
                <h1 className="custom-heading my-4 mt-md-4 mb-md-5" style={headingStyle}>
                  Our unique approach
                </h1>
                <p className="paraSize"  style={paraStyle}>
                  At ePosting, we prioritize simplicity when it comes to
                  obtaining and securing jobs. We understand that the process of
                  networking and seeking jobs can sometimes be daunting. That's
                  why we have developed a streamlined approach to make it
                  effortless for everyone involved.
                </p>
                <p className="paraSize" style={paraStyle}>
                  Our platform is designed to guide job seekers through each
                  step of the job process, ensuring a seamless experience from
                  start to finish. By doing so, we hope to eliminate unnecessary
                  hurdles and make jobs accessible. We believe that everyone
                  should have an equal opportunity to leverage the power of
                  jobs, regardless of their background or prior experience.
                </p>
                <p className="paraSize" style={paraStyle}>
                  With ePosting, you can trust that obtaining and closing jobs
                  will be a straightforward and rewarding experience, helping
                  you unlock new doors and propel your career forward.
                </p>
              </div>
            </div>
         
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mt-5 mt-md-0">
          
            <img
              src={girlMakePainting}
              alt="girlImage"
              className="w-100"
              style={{}}
            />
         
        </div>
      </div>
      </div>
    </>
  );
};

export default Approach;

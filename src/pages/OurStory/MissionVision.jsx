import { MainPost } from "../landingPage/LandingPage.style";
import mission from "./assets/mission.svg";
import vision from "./assets/vision.svg";
import './missionVision.css';

const MissionVision = () => {
  const headingStyle = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "start",
  };

  const paraStyle = {
    color: "#4B465C",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "start",
  };
  const imgStyle = {
    transition: 'transform 0.3s',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <>
    <div className="main-container-missions-page"  >

   
      <div className="row my-0 my-md-5 px-md-0 py-lg-5 align-items-center w-100 custom-column-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6">
          
            <img src={mission} alt="mission" className="w-100" style={imgStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}/>
          
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column mt-4 mt-md-5">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <div className="w-100">
                <h1 className="custom-headin-1 mb-4 " style={headingStyle}>
                  Our mission
                </h1>
                <p className="custom-para" style={paraStyle}>
                  ePosting was established with a clear mission in mind: to
                  bring jobs to the mass market.
                </p>
              </div>
            </div>
          </MainPost>
        </div>
      </div>

      <div className="row my-0 my-md-5 px-4 ml-1 px-md-0 py-lg-5 align-items-center w-100 ">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column ">
         
            <div className="w-100 d-flex align-items-start gap-2">
              <div className="w-100">
                <h1 className="custom-headin-1 mt-5 pt-2 mb-4 mx-1" style={headingStyle}>
                Our vision
                </h1>
                <p className="custom-para mt-4 mt-md-0 mx-1" style={paraStyle}>
                Our vision is to revolutionize the way people find and secure job opportunities, fostering a more efficient and effective job market where jobs play a central role. At ePosting, we are committed to empowering individuals by leveraging the potential of jobs and transforming the landscape of recruitment.
                </p>
              </div>
            </div>
          
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mx-1 mt-3 pt-3 pt-md-0 mb-5 my-md-0 mx-md-0">
         
            <img src={vision} alt="vision"      className="w-100 img-hover-scale"  style={imgStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}  />
         
        </div>
        {/* <div className="d-md-none mt-0"> &nbsp;</div> */}
      </div>
      </div>
    </>
  );
};

export default MissionVision;

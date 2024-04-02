import { MainPost } from "../landingPage/LandingPage.style";

import girlImage from "./assets/girlImage.svg";
import boyComputer from "./assets/boyComputer.svg";
import hande from "./assets/hande.svg";
import certificate from "./assets/certificate.svg";
import easyAccess from "./assets/easyAccess.svg";
import saveTime from "./assets/saveTime.svg";

const AnimatedImage = () => {
  return (
    <>
      <div className="row my-5 align-items-center w-100 custom-row-reverse">
        <div className="col-sm-12 py-4 col-md-12 col-lg-6">
          <MainPost>
            <img src={girlImage} alt="girlImage" className="w-100" style={{}} />
          </MainPost>
        </div>

        <div className="col-sm-12 py-4 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <img src={hande} alt="hande" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Streamlined flow
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px",textAlign:'justify'  }}
                >
                  A few clicks away, you will be able to <br className=" d-none d-md-block" /> create a job
                  request available to job <br className=" d-none d-md-block" /> posters and recruiters.
                </p>
              </div>
            </div>

            <div className="w-100 d-flex align-items-start gap-2">
              <img src={certificate} alt="certificate" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" }}>
                  Best practices
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" ,textAlign:'justify' }}
                >
                  Our unique job workflow helps <br className=" d-none d-md-block" /> navigate the job market
                  and increases <br className=" d-none d-md-block" /> your chance of success.
                </p>
              </div>
            </div>
          </MainPost>
        </div>
      </div>

      <div className="row my-5 align-items-center w-100 custom-column-reverse">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column custom-padding-left">
          <MainPost>
            <div className="w-100 d-flex align-items-start gap-2">
              <img src={easyAccess} alt="hande" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B",fontWeight:'600' }}>
                Easy access
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" ,textAlign:'justify' }}
                >
                  We make job  requests standardized <br className=" d-none d-md-block" /> and targeted, so you can find suitable <br className=" d-none d-md-block" /> candidates at your fingertips. 
                </p>
              </div>
            </div>

            <div className="w-100 d-flex align-items-start gap-2">
              <img src={saveTime} alt="certificate" width={32} height={32} />
              <div className="w-100">
                <h1 className="fs-4" style={{ color: "#4B4B4B" ,fontWeight:'600' }}>
                Save time
                </h1>
                <p
                  className="fs-5 fw-normal text-start"
                  style={{ color: "#4B4B4B", lineHeight: "38px" ,textAlign:'justify' }}
                >
                 No more calling candidates to confirm <br className=" d-none d-md-block" /> interest in a position. Our job request <br className=" d-none d-md-block" /> flow will save you time. 
                </p>
              </div>
            </div>
          </MainPost>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <MainPost>
            <img
              src={boyComputer}
              alt="boyComputer"
              className="w-100"
              style={{}}
            />
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default AnimatedImage;

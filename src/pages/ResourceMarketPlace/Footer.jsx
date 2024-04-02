import { useEffect, useRef } from "react";
import Input from "../../components/Input/Input";

import logo from "../../assets/images/logo.svg";
import send from "../../assets/images/send.svg";
import linkedIn from "../../assets/images/linkedinLanding.svg";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <section className="account">
        <p className="main-heading">
          Join us to reimagine the way we approach jobs
        </p>
        <p className="sub-heading fs-6">
          an ecosystem of technologies, resources and partners that <br />
          empowers each one of our users to be successful.
        </p>
        <PrimaryButton className="fit-content">Create an account</PrimaryButton>
      </section>

      <footer>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Our Marketplaces</p>
              <p>Jobs Marketplace</p>
              <p
                onClick={() => navigate("/resources-marketplace")}
                style={{ cursor: "pointer" }}
              >
                Resources Marketplace
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">User Personas</p>

              <p
                onClick={() => navigate("/how-to")}
                style={{ cursor: "pointer" }}
              >
                How to
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Company</p>
              <p
                onClick={() => navigate("/our-story")}
                style={{ cursor: "pointer" }}
              >
                Our story
              </p>
              <p onClick={() => navigate("/faq")} style={{ cursor: "pointer" }}>
                FAQ
              </p>
              <p>Contact us</p>
              <p>Partner with us</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Get It Touch</p>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address..."
                image={send}
                imagePosition="right contact-us"
              />
              <img
                src={linkedIn}
                alt="linkedIn"
                width={54}
                className="m-auto m-md-0"
              />
              <p className="m-0 text-center d-block d-md-none">
                support@eposting.com
              </p>
            </div>
          </div>
        </div>
        <div className="copy-right d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span
            onClick={() => navigate("/privacy-policy")}
            style={{ cursor: "pointer" }}
            className="ms-0 ms-md-auto"
          >
            Privacy Policy
          </span>
          <span
            onClick={() => navigate("/terms-services")}
            style={{ cursor: "pointer" }}
            className="ms-0 ms-md-3 me-md-auto"
          >
            Terms of Use
          </span>
          <span>© 2023 ePosting Corp. all rights reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

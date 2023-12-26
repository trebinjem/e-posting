// LandingPage.jsx
import React from "react";
import {
  Button,
  Header,
  LandingPageWrapper,
  MainPost,
  Or,
  SocialButton,
} from "./LandingPage.style";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/checkBox/Checkbox";
import PrimaryButton from "../../components/Button/PrimaryButton";

import logo from "../../assets/images/logo.svg";
import mail from "../../assets/images/mail.svg";
import eye from "../../assets/images/eye.svg";
import google from "../../assets/images/google.svg";
import linkedIn from "../../assets/images/linkedin.svg";
import landingPageRight from "../../assets/images/landing-page-right.svg";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <div>
        <Header className="d-flex align-items-center">
          <img src={logo} alt="logo" />
          <div className="mx-auto">
            <span className="me-5">Our Products</span>
            <span className="me-5">Partners</span>
            <span>Help</span>
          </div>
          <Button>Login</Button>
        </Header>

        <div className="row w-100">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <MainPost>
              <p>Join the world's fastest growing jobs marketplace</p>
              <div className="max-w-500">
                <Input
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="jhonsmith@mail.com"
                  image={mail}
                  imagePosition="left"
                  eg="e.g. jhonsmith@mail.com"
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  imagePosition="right"
                  image={eye}
                  className="mb-3"
                />
                <span>
                  must be at least 8 characters in length and contain a
                  combination of uppercase and lowercase letters and a number or
                  a special character
                </span>
                <CheckBox
                  type="checkbox"
                  name="terms_conditions"
                  value="Terms&Conditions"
                  label="I have read and accepted the Terms of Use and Privacy Policy."
                />
                <PrimaryButton margin="0 0 24px 0">Sign Up</PrimaryButton>
                <Or>or</Or>
                <div className="d-flex align-items-center gap-3">
                  <SocialButton>
                    <img src={google} alt="social-icon" />
                    Sign up with Google
                  </SocialButton>
                  <SocialButton>
                    <img src={linkedIn} alt="social-icon" />
                    Sign up with LinkedIn
                  </SocialButton>
                </div>
              </div>
            </MainPost>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              src={landingPageRight}
              alt="landingPageRight"
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
      <section>
        Instead of sending your resume into oblivion, ePosting helps you connect
        with users and receive updates on your requests.
      </section>
    </LandingPageWrapper>
  );
};

export default LandingPage;

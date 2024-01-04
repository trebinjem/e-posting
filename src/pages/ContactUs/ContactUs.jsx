// LandingPage.jsx
import React, { useState } from "react";
import {
  Button,
  Header,
  LandingPageWrapper,
  MainPost,
  Or,
  SocialButton,
} from "./../landingPage/LandingPage.style";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/checkBox/Checkbox";
import PrimaryButton from "../../components/Button/PrimaryButton";

import logo from "../../assets/images/logo.svg";
import mail from "../../assets/images/mail.svg";
import send from "../../assets/images/send.svg";
import eye from "../../assets/images/eye.svg";
import google from "../../assets/images/google.svg";
import linkedIn from "../../assets/images/linkedin.svg";
import landingPageRight from "../../assets/images/landing-page-right.svg";
import secondImg from "../../assets/images/second-img.svg";
import fourthImg from "../../assets/images/fourth-img.svg";
import fifthImg from "../../assets/images/fifth-img.svg";
import CountUp from "react-countup";
import SlideInLeftImage from "../../components/SlidingImage/SlideInLeftImage";
import ScrollTrigger from "react-scroll-trigger";
import BounceHead from "../../components/SlidingImage/BounceHeads";
import SpeakLoud from "../../components/SlidingImage/SpeakLoud";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";

const ContactUs = () => {
  const [menu, setMenu] = useState(false);
  const [counterOn, setCounterOn] = useState(false);

  const navigate = useNavigate();

  return (
    <LandingPageWrapper>
      <section className="first contact-us-page">
        <Header className="d-flex align-items-center position-relative contact-us-page">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
          <div className={`mobile-menu w-100 ${menu ? "active" : ""}`}>
            <div className="text-end d-block d-md-none">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMenu(false)}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                  fill="#1C274C"
                />
              </svg>
            </div>
            <div className="d-flex align-items-center w-100">
              <span className="me-5 ms-0 ms-md-auto">Our Products</span>
              <span className="me-5">Partners</span>
              <span
                className="me-0 me-md-auto"
                onClick={() => navigate("/contact-us")}
              >
                Help
              </span>
              <Button className="ms-0 ms-md-auto white">Login</Button>
            </div>
          </div>
          <div className="ms-auto d-block d-md-none">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setMenu(!menu)}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Header>
      </section>
      <section className="contact-us-section">
        <p className="main-heading">We are here to help.</p>
        <p className="sub-heading">Get the info you're looking for right now</p>
        <Button className="blue max-w-100">View all help topics</Button>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>1</span> How the Marketplaces work?
                </Accordion.Header>
                <Accordion.Body>
                  As a creative agency we work with you to develop solutions to
                  address your brand needs. That includes various aspects of
                  brand planning and strategy, marketing and design.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span>2</span> What happens when your payment is in escrow?
                </Accordion.Header>
                <Accordion.Body>
                  As a creative agency we work with you to develop solutions to
                  address your brand needs. That includes various aspects of
                  brand planning and strategy, marketing and design.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span>3</span> Take these steps to prevent scams
                </Accordion.Header>
                <Accordion.Body>
                  As a creative agency we work with you to develop solutions to
                  address your brand needs. That includes various aspects of
                  brand planning and strategy, marketing and design.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span>4</span> How is our marketplace different from website
                  applications?
                </Accordion.Header>
                <Accordion.Body>
                  As a creative agency we work with you to develop solutions to
                  address your brand needs. That includes various aspects of
                  brand planning and strategy, marketing and design.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span>5</span> Other popular help topics
                </Accordion.Header>
                <Accordion.Body>
                  As a creative agency we work with you to develop solutions to
                  address your brand needs. That includes various aspects of
                  brand planning and strategy, marketing and design.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="form-custom mt-5 mt-md-0">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Input
                    type="email"
                    name="email"
                    label="First name"
                    placeholder="First name"
                    className="contact-us"
                    requiredStar={true}
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <Input
                    type="email"
                    name="email"
                    label="Last name"
                    placeholder="Last name"
                    className="contact-us"
                    requiredStar={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Input
                    type="email"
                    name="email"
                    label="Company"
                    placeholder="Company"
                    className="contact-us"
                    requiredStar={false}
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <Input
                    type="email"
                    name="email"
                    label="Email address"
                    placeholder="Email address"
                    className="contact-us"
                    requiredStar={true}
                  />
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-sm-12 col-md-12">
                  <div className="d-flex align-items-end gap-3">
                    <Input
                      type="email"
                      name="email"
                      label="Contact Number"
                      placeholder="United States"
                      className="contact-us min-w-150"
                      requiredStar={false}
                    />
                    <Input
                      type="email"
                      name="email"
                      label=""
                      placeholder="+1"
                      className="contact-us w-100"
                      requiredStar={false}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <label>
                    Reason for contacting us <span>*</span>
                  </label>
                  <Select className="contact-us-select">
                    <MenuItem disabled value="">
                      <em>Reason for contacting us</em>
                    </MenuItem>
                    <MenuItem value={20}>Accounts</MenuItem>
                    <MenuItem value={21}>Technical support</MenuItem>
                    <MenuItem value={22}>Payments</MenuItem>
                    <MenuItem value={33}>
                      Request a feature / provide feedback
                    </MenuItem>
                    <MenuItem value={34}>Others</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-12 col-md-12">
                  <Input
                    type="textarea"
                    name="email"
                    label="How can we help?"
                    placeholder=""
                    className="contact-us"
                    requiredStar={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <Input
                    type="text"
                    name="email"
                    label="How did you hear about us?"
                    placeholder=""
                    className="contact-us"
                    requiredStar={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <CheckBox
                    type="checkbox"
                    name="terms_conditions"
                    value="Terms&Conditions"
                    className="contact-us"
                    label="I have read and accepted the Terms of Use and Privacy Policy."
                  >
                    I have read and accepted the{" "}
                    <span className="highlight">Terms of Use</span> and
                    <span className="highlight"> Privacy Policy.</span>
                  </CheckBox>
                </div>
              </div>
              <div className="text-end">
                <Button className="fill max-w-100">Contact us now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="account">
        <p className="main-heading">
          Join us to reimagine the way we approach finding a new job
        </p>
        <p className="sub-heading">
          An ecosystem of technologies, resources and partners that empowers
          each one of our users to be successful
        </p>
        <PrimaryButton className="fit-content max-w-100">
          Create an account
        </PrimaryButton>
      </section>
      <footer>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Our Marketplaces</p>
              <p>Jobs Marketplace</p>
              <p>Resources Marketplace</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Partners</p>
              <p>Jobs workflow</p>
              <p>Contract management</p>
              <p>How to</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="contents">
              <p className="heading">Company</p>
              <p>Our story</p>
              <p>FAQ</p>
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
              <img src={linkedIn} alt="linkedIn" width={54} />
            </div>
          </div>
        </div>
        <div className="copy-right d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span className="ms-0 ms-md-auto">Privacy Policy</span>
          <span className="ms-0 ms-md-auto">Terms of Use</span>
          <span>© 2023 ePosting Corp. all rights reserved</span>
        </div>
      </footer>
    </LandingPageWrapper>
  );
};

export default ContactUs;

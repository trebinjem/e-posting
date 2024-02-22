// LandingPage.jsx
import React, { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  Button,
  Header,
  LandingPageWrapper,
  MainPost,
  Or,
  SocialButton,
} from "./Personas.style";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/checkBox/Checkbox";
import PrimaryButton from "../../components/Button/PrimaryButton";

import logo from "../../assets/images/logo.svg";
import mail from "../../assets/images/mail.svg";
import send from "../../assets/images/send.svg";
import eye from "../../assets/images/eye.svg";
import google from "../../assets/images/google.svg";
import linkedIn from "../../assets/images/linkedinLanding.svg";
import landingPageRight from "../../assets/images/landing-page-right.svg";

import RotatingIcons from "../../components/landingPageRightAnim/landingPageRightAnim";
import secondImg from "../../assets/images/second-img.svg";
import fourthImg from "../../assets/images/fourth-img.svg";
import fifthImg from "../../assets/images/fifth-img.png";
import CountUp from "react-countup";
import SlideInLeftImage from "../../components/SlidingImage/SlideInLeftImage";
import ScrollTrigger from "react-scroll-trigger";
import BounceHead from "../../components/SlidingImage/BounceHeads";
import SpeakLoud from "../../components/SlidingImage/SpeakLoud";
import { useNavigate } from "react-router-dom";
import FirstAnimation from "../FirstAnimation/firstAnimation";
import GirlAnimation from "../GirlAnimation/GirlAnimation";
import BoyAnimation from "../BoyAnimation/BoyAnimation";
import SecondAnimation from "../SecondAnimation/SecondAnimation";
import ImageSlider from "./ImageSlider";

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const Personas = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const navigate = useNavigate();

  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const svgPath = document.querySelectorAll(".textRole");
  const svgPathAnim = anime({
    targets: svgPath,
    autoplay: true,
    fill: ["none", "#000"],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 700,
    delay: anime.stagger(100, { direction: "reverse" }),
  });

  const svgPathQ = document.querySelector(".textRoleQ");

  const svgPathQAnim = anime({
    targets: svgPathQ,
    fill: ["none", "#7367F0"],
    autoplay: true,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: anime.stagger(100, { direction: "reverse" }),
  });

  return (
    <LandingPageWrapper>
      <section className="first" ref={topRef}>
        <Header className="d-flex align-items-center position-relative">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="cursor-pointer logo-mobile"
          />
          <div className={`mobile-menu w-100 ${menu ? "active" : ""}`}>
            <div className="text-end d-block d-lg-none">
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
              <span
                className="me-5 ms-0 ms-lg-auto position-relative"
                onClick={() => setSubMenu(!subMenu)}
              >
                Our Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.56641 9L12.5664 15L18.5664 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className={`sub-menu ${subMenu ? "active" : ""}`}>
                  <div className="mt-0 disable-hover cursor-default">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.9309 4.19443V2.66064C12.9309 2.44556 12.7568 2.27148 12.5417 2.27148C12.3266 2.27148 12.1526 2.44556 12.1526 2.66064V4.19443C12.1526 4.40957 12.3266 4.58359 12.5417 4.58359C12.7568 4.58359 12.9309 4.40957 12.9309 4.19443Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M10.1835 18.6572V19.2215H9.71262C9.49861 19.2215 9.32349 19.3966 9.32349 19.6106C9.32349 19.8247 9.49861 19.9998 9.71262 19.9998H10.2691C10.5454 20.996 11.4599 21.7276 12.5417 21.7276C13.6236 21.7276 14.5381 20.996 14.8144 19.9998H15.3708C15.5849 19.9998 15.76 19.8247 15.76 19.6106C15.76 19.3966 15.5849 19.2215 15.3708 19.2215H14.9V18.6572H10.1835Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M7.56603 6.41722C7.64205 6.49325 7.74161 6.53124 7.84117 6.53124C7.94073 6.53124 8.04032 6.49325 8.11632 6.41722C8.26832 6.26522 8.26832 6.01893 8.11632 5.86693L7.03173 4.78197C6.8797 4.62997 6.63346 4.62997 6.48143 4.78197C6.32943 4.93397 6.32943 5.18026 6.48143 5.33221L7.56603 6.41722Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M3.97095 10.8423C3.97095 11.0573 4.145 11.2314 4.36008 11.2314H5.89426C6.10935 11.2314 6.2834 11.0573 6.2834 10.8423C6.2834 10.6271 6.10935 10.4531 5.89426 10.4531H4.36008C4.145 10.4531 3.97095 10.6271 3.97095 10.8423Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M6.48143 16.9026C6.55743 16.9786 6.65702 17.0166 6.75658 17.0166C6.85614 17.0166 6.9557 16.9786 7.03173 16.9026L8.11632 15.8176C8.26832 15.6656 8.26832 15.4193 8.11632 15.2673C7.96429 15.1153 7.71805 15.1153 7.56603 15.2673L6.48143 16.3523C6.32943 16.5043 6.32943 16.7506 6.48143 16.9026Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M18.6022 4.78197C18.4502 4.62997 18.2039 4.62997 18.0519 4.78197L16.9673 5.86693C16.8153 6.01893 16.8153 6.26522 16.9673 6.41722C17.0433 6.49325 17.1429 6.53124 17.2424 6.53124C17.342 6.53124 17.4416 6.49325 17.5176 6.41722L18.6022 5.33221C18.7542 5.18026 18.7542 4.93397 18.6022 4.78197Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M18.8 10.8423C18.8 11.0573 18.9741 11.2314 19.1892 11.2314H20.7234C20.9385 11.2314 21.1125 11.0573 21.1125 10.8423C21.1125 10.6271 20.9385 10.4531 20.7234 10.4531H19.1892C18.9741 10.4531 18.8 10.6271 18.8 10.8423Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M18.0519 16.9026C18.1279 16.9786 18.2275 17.0166 18.327 17.0166C18.4266 17.0166 18.5262 16.9786 18.6022 16.9026C18.7542 16.7506 18.7542 16.5043 18.6022 16.3523L17.5176 15.2673C17.3656 15.1153 17.1193 15.1153 16.9673 15.2673C16.8153 15.4193 16.8153 15.6656 16.9673 15.8176L18.0519 16.9026Z"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M18.1065 10.8432C18.1065 9.30601 17.4916 7.87783 16.3825 6.81938C15.3396 5.81924 13.9854 5.27832 12.5533 5.27832C12.4599 5.27832 12.3704 5.28223 12.277 5.28613C9.35452 5.42231 6.97681 7.9168 6.98072 10.8471C6.98072 12.2285 7.49051 13.5477 8.42056 14.5712C9.09769 15.3184 9.47127 16.3185 9.47127 17.3847V17.4897C9.47127 17.7077 9.64639 17.8789 9.86043 17.8789H15.0439C15.254 17.8789 15.4291 17.7116 15.433 17.5015C15.4564 16.4586 15.8922 15.4234 16.6549 14.5867C17.5889 13.5594 18.1065 12.2324 18.1065 10.8432ZM12.636 11.0966C14.1584 11.4759 14.478 12.2439 14.478 12.8211C14.478 13.6589 13.8126 14.3599 12.9309 14.5219V15.023C12.9309 15.2381 12.7569 15.4122 12.5418 15.4122C12.3267 15.4122 12.1526 15.2381 12.1526 15.023V14.5219C11.2707 14.36 10.6052 13.659 10.6052 12.8211C10.6052 12.6061 10.7792 12.432 10.9943 12.432C11.2094 12.432 11.3835 12.6061 11.3835 12.8211C11.3835 13.3494 11.903 13.7788 12.5418 13.7788C13.1802 13.7788 13.6997 13.3494 13.6997 12.8211C13.6997 12.2777 13.0187 11.9938 12.4475 11.8517C10.9248 11.4713 10.6052 10.7036 10.6052 10.1268C10.6052 9.28887 11.2707 8.58765 12.1526 8.42568V7.92451C12.1526 7.70938 12.3267 7.53535 12.5418 7.53535C12.7569 7.53535 12.9309 7.70938 12.9309 7.92451V8.42568C13.8126 8.58774 14.478 9.28896 14.478 10.1268C14.478 10.3418 14.304 10.5159 14.0889 10.5159C13.8738 10.5159 13.6997 10.3418 13.6997 10.1268C13.6997 9.59854 13.1802 9.1687 12.5418 9.1687C11.903 9.1687 11.3835 9.59854 11.3835 10.1268C11.3835 10.6694 12.0645 10.9537 12.636 11.0966Z"
                        fill="#4B4B4B"
                      />
                    </svg>
                    <div>
                      <p>Our Products</p>
                      <p className="sub-content">
                        Job marketplaces for job posters and seekers alike
                      </p>
                    </div>
                  </div>
                  <div onClick={() => navigate("/job-marketplace")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.5001 5.41699C12.0401 5.41699 11.6667 5.04366 11.6667 4.58366V3.33366H8.33341V4.58366C8.33341 5.04366 7.96008 5.41699 7.50008 5.41699C7.04008 5.41699 6.66675 5.04366 6.66675 4.58366V3.33366C6.66675 2.41449 7.41425 1.66699 8.33341 1.66699H11.6667C12.5859 1.66699 13.3334 2.41449 13.3334 3.33366V4.58366C13.3334 5.04366 12.9601 5.41699 12.5001 5.41699Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5917 12.8169C10.4417 12.8753 10.225 12.9169 10 12.9169C9.775 12.9169 9.55833 12.8753 9.35833 12.8003L0 9.68359V16.0419C0 17.3086 1.025 18.3336 2.29167 18.3336H17.7083C18.975 18.3336 20 17.3086 20 16.0419V9.68359L10.5917 12.8169Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20 6.45866V8.36699L10.2 11.6337C10.1333 11.6587 10.0667 11.667 10 11.667C9.93333 11.667 9.86667 11.6587 9.8 11.6337L0 8.36699V6.45866C0 5.19199 1.025 4.16699 2.29167 4.16699H17.7083C18.975 4.16699 20 5.19199 20 6.45866Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p>Jobs marketplace</p>
                  </div>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="9.53125" fill="currentColor" />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.53125"
                        fill="white"
                        fill-opacity="0.2"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.53125"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.53125"
                        stroke="currentColor"
                        stroke-width="0.9375"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.53125"
                        stroke="white"
                        stroke-opacity="0.2"
                        stroke-width="0.9375"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.53125"
                        stroke="currentColor"
                        stroke-opacity="0.2"
                        stroke-width="0.9375"
                      />
                      <path
                        d="M11.0381 4.97388C11.0381 4.29903 10.4891 3.75 9.81424 3.75C8.19059 3.81724 8.19106 6.13078 9.81424 6.19775C10.4891 6.19775 11.0381 5.64875 11.0381 4.97388Z"
                        fill="white"
                      />
                      <path
                        d="M9.81445 6.19824C8.65941 6.19824 7.71973 7.13795 7.71973 8.29296V8.66944C7.71973 8.85146 7.86729 8.99903 8.04932 8.99903H11.5796C11.7616 8.99903 11.9092 8.85146 11.9092 8.66944V8.29298C11.9092 7.13795 10.9695 6.19824 9.81445 6.19824Z"
                        fill="white"
                      />
                      <path
                        d="M7.38114 10.8469C7.38114 10.1721 6.83211 9.62305 6.15726 9.62305C4.53361 9.69028 4.53407 12.0038 6.15726 12.0708C6.83213 12.0708 7.38114 11.5218 7.38114 10.8469Z"
                        fill="white"
                      />
                      <path
                        d="M8.25196 14.5414V14.165C8.13656 11.3853 4.17687 11.3875 4.0625 14.165V14.5414C4.0625 14.7234 4.21007 14.871 4.39209 14.871H7.92237C8.10439 14.871 8.25196 14.7235 8.25196 14.5414Z"
                        fill="white"
                      />
                      <path
                        d="M14.6953 10.8469C14.6953 10.1721 14.1463 9.62305 13.4715 9.62305C11.8478 9.69028 11.8483 12.0038 13.4715 12.0708C14.1463 12.0708 14.6953 11.5218 14.6953 10.8469Z"
                        fill="white"
                      />
                      <path
                        d="M13.4717 12.0703C12.3166 12.0703 11.377 13.01 11.377 14.165V14.5415C11.377 14.7235 11.5245 14.8711 11.7065 14.8711H15.2368C15.4188 14.8711 15.5664 14.7235 15.5664 14.5415V14.165C15.5664 13.01 14.6267 12.0703 13.4717 12.0703Z"
                        fill="white"
                      />
                    </svg>
                    <p>Resources marketplace</p>
                  </div>
                </div>
              </span>
              <span className="me-5 active">User Personas</span>
              <span
                className="me-0 me-md-auto cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Help
              </span>
              <Button className="ms-0 ms-lg-auto white -btn">Login</Button>
              <Button className="ms-0 ms-lg-2 white -btn">Join Us</Button>
            </div>
          </div>
          <div className="ms-auto d-block d-lg-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="34"
              viewBox="0 0 33 34"
              onClick={() => setMenu(true)}
              fill="none"
            >
              <rect
                x="0.00115967"
                width="32.905"
                height="33.2513"
                rx="16.4525"
                fill="white"
              />
              <rect
                x="6.00116"
                y="11"
                width="20.0956"
                height="1.7863"
                fill="#7367F0"
              />
              <rect
                x="6.00116"
                y="15.7852"
                width="20.0956"
                height="1.7863"
                fill="#7367F0"
              />
              <rect
                x="6.00116"
                y="20.5723"
                width="20.0956"
                height="1.7863"
                fill="#7367F0"
              />
            </svg>
          </div>
        </Header>
        <div className="row m-0 align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
            <MainPost>
              <p className="mt-5 mt-lg-0 text-start text-md-start">
                We enable you to be as competitive as you can be
              </p>
              <p className="sub-text text-start text-md-start mb-0 mb-lg-5">
                ePosting provides a platform for users to showcase their skills,
                build a track record, actively engage in industry-related
                conversations, and connect with targeted users on the other end
                of the jobs.
              </p>
              <div className="d-flex btn-group mt-4 mt-lg-0">
                <Button className="ms-0 me-0 me-md-4 blue ms-auto ms-lg-0">
                  Get registered
                </Button>
                <Button className="ms-0 blue me-auto me-lg-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="mb-1 me-2"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83325 3.33301V16.6663L16.6666 9.99967L5.83325 3.33301Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  How it works
                </Button>
              </div>
            </MainPost>
          </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              src={landingPageRight}
              alt="landingPageRight"
              className="w-100 h-100"
            />
          </div> */}
          <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
            <SecondAnimation />
          </div>
        </div>
      </section>
      <section className="image-sliders">
        <p>Employers and candidates are connected in unprecedented ways</p>
        <div>
          <ImageSlider />
        </div>
      </section>
      <section className="account">
        <p className="main-heading">
          Join us to reimagine the way we approach finding a new job
        </p>
        <p className="sub-heading">
          An ecosystem of technologies, resources and User Personas that
          empowers each one of our users to be successful
        </p>
        <PrimaryButton className="fit-content">Create an account</PrimaryButton>
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
              <p className="heading">User Personas</p>

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
          <span className="ms-0 ms-md-auto">Privacy Policy</span>
          <span className="ms-0 ms-md-3 me-md-auto">Terms of Use</span>
          <span>© 2023 ePosting Corp. all rights reserved</span>
        </div>
      </footer>
    </LandingPageWrapper>
  );
};

export default Personas;

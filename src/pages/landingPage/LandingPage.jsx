// LandingPage.jsx
import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
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

const LandingPage = () => {
  const [menu, setMenu] = useState(false);
  const [counterOn, setCounterOn] = useState(false);

  const navigate = useNavigate();

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
      <section className="first">
        <Header className="d-flex align-items-center position-relative">
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
                className="me-0 me-md-auto cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Help
              </span>
              <Button className="ms-0 ms-md-auto">Login</Button>
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

        <div className="row m-0 align-items-start">
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
                  placeholder="Password"
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
                >
                  I have read and accepted the{" "}
                  <span className="white">Terms of Use</span> and{" "}
                  <span className="white">Privacy Policy.</span>
                </CheckBox>
                <PrimaryButton margin="0 0 24px 0">Sign Up</PrimaryButton>
                <Or>or</Or>
                <div className="d-flex align-items-center gap-3">
                  <SocialButton>
                    <img src={google} alt="social-icon" />
                    Sign up with Google
                  </SocialButton>
                  <SocialButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      className="me-3"
                    >
                      <g clip-path="url(#clip0_137_7462)">
                        <path
                          d="M15.5455 0.5H2.45455C1.09894 0.5 0 1.59894 0 2.95455V16.0455C0 17.4011 1.09894 18.5 2.45455 18.5H15.5455C16.9011 18.5 18 17.4011 18 16.0455V2.95455C18 1.59894 16.9011 0.5 15.5455 0.5Z"
                          fill="#0077B5"
                        />
                        <path
                          d="M6.48408 5.40909C6.48408 5.71251 6.3941 6.00911 6.22554 6.26139C6.05697 6.51367 5.81737 6.71029 5.53706 6.82641C5.25674 6.94252 4.94828 6.9729 4.6507 6.91371C4.35311 6.85451 4.07977 6.7084 3.86522 6.49386C3.65067 6.27931 3.50456 6.00596 3.44537 5.70838C3.38618 5.41079 3.41656 5.10234 3.53267 4.82202C3.64878 4.5417 3.84541 4.30211 4.09769 4.13354C4.34997 3.96497 4.64657 3.875 4.94999 3.875C5.35685 3.875 5.74705 4.03663 6.03475 4.32432C6.32245 4.61202 6.48408 5.00222 6.48408 5.40909Z"
                          fill="white"
                        />
                        <path
                          d="M6.13634 7.9659V14.7435C6.13661 14.7935 6.127 14.8431 6.10805 14.8893C6.0891 14.9356 6.06119 14.9777 6.02593 15.0131C5.99067 15.0486 5.94875 15.0767 5.90259 15.0959C5.85642 15.1151 5.80691 15.125 5.75691 15.125H4.13998C4.08998 15.1251 4.04044 15.1154 3.99422 15.0963C3.948 15.0772 3.90601 15.0492 3.87065 15.0139C3.8353 14.9785 3.80728 14.9365 3.78821 14.8903C3.76914 14.8441 3.75939 14.7945 3.75952 14.7445V7.9659C3.75952 7.865 3.79961 7.76823 3.87096 7.69688C3.9423 7.62553 4.03907 7.58545 4.13998 7.58545H5.75691C5.85764 7.58572 5.95414 7.62592 6.02527 7.69724C6.0964 7.76856 6.13634 7.86518 6.13634 7.9659Z"
                          fill="white"
                        />
                        <path
                          d="M14.5882 11.4943V14.7752C14.5883 14.8211 14.5794 14.8667 14.5618 14.9092C14.5443 14.9517 14.5185 14.9903 14.486 15.0228C14.4535 15.0553 14.4149 15.0811 14.3724 15.0986C14.3299 15.1161 14.2844 15.1251 14.2384 15.1249H12.4998C12.4538 15.1251 12.4083 15.1161 12.3658 15.0986C12.3233 15.0811 12.2846 15.0553 12.2521 15.0228C12.2196 14.9903 12.1939 14.9517 12.1763 14.9092C12.1588 14.8667 12.1499 14.8211 12.15 14.7752V11.5955C12.15 11.121 12.2891 9.51733 10.9094 9.51733C9.84068 9.51733 9.62284 10.6147 9.57988 11.1077V14.7752C9.57989 14.8671 9.54374 14.9553 9.47925 15.0207C9.41476 15.0862 9.3271 15.1236 9.23522 15.1249H7.5559C7.51002 15.1249 7.46459 15.1159 7.42221 15.0983C7.37983 15.0807 7.34134 15.0549 7.30894 15.0224C7.27654 14.9899 7.25087 14.9514 7.23341 14.9089C7.21594 14.8665 7.20702 14.8211 7.20715 14.7752V7.9362C7.20702 7.89031 7.21594 7.84485 7.23341 7.80242C7.25087 7.75999 7.27654 7.72142 7.30894 7.68893C7.34134 7.65644 7.37983 7.63066 7.42221 7.61307C7.46459 7.59548 7.51002 7.58642 7.5559 7.58642H9.23522C9.32799 7.58642 9.41695 7.62327 9.48255 7.68887C9.54815 7.75446 9.585 7.84343 9.585 7.9362V8.52733C9.98181 7.9321 10.5699 7.4729 11.8248 7.4729C14.6045 7.4729 14.5882 10.0686 14.5882 11.4943Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_137_7462">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Sign up with LinkedIn
                  </SocialButton>
                </div>
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
          <div className="col-sm-12 col-md-12 col-lg-6">
            <RotatingIcons />
          </div>
        </div>
      </section>
      <section className="second">
        <div className="main-heading">
          Instead of sending your resume into oblivion, ePosting helps you
          connect with users and receive updates on your requests.
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3 mb-md-0">
            <div className="card h-100">
              <div className="image-parent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="74"
                  viewBox="0 0 75 74"
                  fill="none"
                >
                  <path
                    d="M43.8333 58.5834C43.8349 60.7852 44.3635 62.9546 45.375 64.9104C45.4543 65.0502 45.4958 65.2083 45.4954 65.369C45.495 65.5298 45.4528 65.6876 45.3728 65.8271C45.2928 65.9665 45.1778 66.0827 45.0393 66.1642C44.9007 66.2456 44.7433 66.2896 44.5826 66.2917H22.25C15.1891 66.2917 11.4583 62.5917 11.4583 55.5617C11.4583 47.6992 15.8983 38.5417 28.4166 38.5417H40.75C43.1954 38.398 45.6415 38.8118 47.9036 39.7519C50.1657 40.692 52.1846 42.1338 53.8079 43.9684C53.8969 44.0886 53.9553 44.2286 53.9784 44.3763C54.0014 44.5241 53.9882 44.6752 53.94 44.8168C53.8918 44.9583 53.81 45.0861 53.7016 45.1891C53.5932 45.2921 53.4615 45.3674 53.3176 45.4083C50.5503 46.325 48.1432 48.0925 46.44 50.4585C44.7368 52.8245 43.8245 55.6681 43.8333 58.5834ZM34.6111 32.375C37.0504 32.375 39.4349 31.6517 41.4631 30.2965C43.4913 28.9413 45.0721 27.0151 46.0056 24.7615C46.9391 22.5079 47.1833 20.028 46.7074 17.6356C46.2315 15.2432 45.0569 13.0456 43.332 11.3207C41.6072 9.59588 39.4096 8.42125 37.0172 7.94536C34.6247 7.46948 32.1449 7.71372 29.8913 8.6472C27.6377 9.58068 25.7115 11.1615 24.3563 13.1897C23.0011 15.2179 22.2777 17.6024 22.2777 20.0417C22.2777 23.3127 23.5771 26.4497 25.8901 28.7627C28.203 31.0756 31.3401 32.375 34.6111 32.375ZM65.4166 56.2709H61.5625V52.4167C61.5625 51.8034 61.3188 51.2152 60.8852 50.7815C60.4515 50.3479 59.8633 50.1042 59.25 50.1042C58.6367 50.1042 58.0485 50.3479 57.6148 50.7815C57.1811 51.2152 56.9375 51.8034 56.9375 52.4167V56.2709H53.0833C52.47 56.2709 51.8818 56.5145 51.4481 56.9482C51.0145 57.3819 50.7708 57.9701 50.7708 58.5834C50.7708 59.1967 51.0145 59.7849 51.4481 60.2186C51.8818 60.6522 52.47 60.8959 53.0833 60.8959H56.9375V64.75C56.9375 65.3634 57.1811 65.9516 57.6148 66.3852C58.0485 66.8189 58.6367 67.0625 59.25 67.0625C59.8633 67.0625 60.4515 66.8189 60.8852 66.3852C61.3188 65.9516 61.5625 65.3634 61.5625 64.75V60.8959H65.4166C66.03 60.8959 66.6182 60.6522 67.0518 60.2186C67.4855 59.7849 67.7291 59.1967 67.7291 58.5834C67.7291 57.9701 67.4855 57.3819 67.0518 56.9482C66.6182 56.5145 66.03 56.2709 65.4166 56.2709Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p>Free to join</p>
              <p>
                We provide marketplace and networking opportunities for
                everyone.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3 mb-md-0">
            <div className="card h-100">
              <div className="image-parent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <g clip-path="url(#clip0_137_7483)">
                    <path
                      d="M9.90154 20.7007C10.8956 20.7007 11.7015 19.8948 11.7015 18.9007C11.7015 17.9066 10.8956 17.1007 9.90154 17.1007C8.90744 17.1007 8.10156 17.9066 8.10156 18.9007C8.10156 19.8948 8.90744 20.7007 9.90154 20.7007Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.5123 26.1005H7.29069C6.74533 26.1005 6.30164 26.5108 6.30164 27.0148V30.8128C7.41936 31.2511 8.63073 31.5003 9.90148 31.5003C11.1722 31.5003 12.3836 31.251 13.5013 30.8128V27.0148C13.5013 26.5109 13.0576 26.1005 12.5123 26.1005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M31.5008 9.00107C32.4949 9.00107 33.3008 8.1952 33.3008 7.2011C33.3008 6.207 32.4949 5.40112 31.5008 5.40112C30.5067 5.40112 29.7008 6.207 29.7008 7.2011C29.7008 8.1952 30.5067 9.00107 31.5008 9.00107Z"
                      fill="currentColor"
                    />
                    <path
                      d="M34.1115 14.4009H28.8899C28.3446 14.4009 27.9009 14.8112 27.9009 15.3153V19.1132C29.0186 19.5515 30.23 19.8007 31.5007 19.8007C32.7715 19.8007 33.9828 19.5514 35.1006 19.1132V15.3153C35.1006 14.8112 34.6569 14.4009 34.1115 14.4009Z"
                      fill="currentColor"
                    />
                    <path
                      d="M43.2004 32.4002C44.1945 32.4002 45.0003 31.5944 45.0003 30.6003C45.0003 29.6062 44.1945 28.8003 43.2004 28.8003C42.2063 28.8003 41.4004 29.6062 41.4004 30.6003C41.4004 31.5944 42.2063 32.4002 43.2004 32.4002Z"
                      fill="currentColor"
                    />
                    <path
                      d="M45.8111 37.8002H40.5895C40.0442 37.8002 39.6005 38.2105 39.6005 38.7146V42.5125C40.7182 42.9508 41.9296 43.2 43.2003 43.2C44.4711 43.2 45.6824 42.9507 46.8002 42.5125V38.7146C46.8002 38.2115 46.3565 37.8002 45.8111 37.8002Z"
                      fill="currentColor"
                    />
                    <path
                      d="M43.2004 23.4005C43.0798 23.4005 42.9627 23.414 42.844 23.4185L39.0272 16.3106C40.397 14.7069 41.2564 12.6629 41.3734 10.422L47.0351 13.1553C46.8902 13.545 46.8002 13.9616 46.8002 14.4008C46.8002 16.3862 48.4148 18.0006 50.4 18.0006C52.3854 18.0006 53.9999 16.3861 53.9999 14.4008C53.9999 12.4154 52.3853 10.801 50.4 10.801C49.5154 10.801 48.7153 11.1339 48.088 11.6649L41.268 8.37188C40.4364 3.04673 35.3598 -0.890604 29.6152 0.17586C25.6859 0.904836 22.5252 4.05561 21.7827 7.98219C21.6872 8.48621 21.6332 8.98474 21.6126 9.4761L16.2785 14.0399C14.7701 12.7656 12.8784 11.934 10.8012 11.7459V7.07234C12.3491 6.67009 13.5011 5.27331 13.5011 3.60021C13.5011 1.61483 11.8866 0.000366211 9.90129 0.000366211C7.91591 0.000366211 6.30144 1.61493 6.30144 3.60021C6.30144 5.27321 7.45344 6.66999 9.00135 7.07234V11.7459C3.96328 12.2031 0.00168744 16.4447 0.00168744 21.5998C0.00168744 25.0664 1.79628 28.1173 4.50157 29.8867V27.014C4.50157 25.5174 5.75345 24.2997 7.2906 24.2997H12.5122C14.0502 24.2997 15.3012 25.5174 15.3012 27.014V29.8867C17.5493 28.417 19.1504 26.0556 19.6336 23.3124L23.6952 26.4785C23.507 26.915 23.4 27.3946 23.4 27.8995C23.4 29.8849 25.0146 31.4994 26.9998 31.4994C28.9851 31.4994 30.5997 29.8848 30.5997 27.8995C30.5997 25.9141 28.9851 24.2997 26.9998 24.2997C26.1718 24.2997 25.4177 24.5921 24.8084 25.0638L19.7766 21.1417C19.6758 18.9395 18.8632 16.9199 17.5483 15.3216L21.7691 11.7091C22.2722 14.4126 23.8768 16.7327 26.0997 18.1862V15.3135C26.0997 13.8168 27.3516 12.5991 28.8887 12.5991H34.1103C35.6483 12.5991 36.8993 13.8168 36.8993 15.3135V16.2567C36.8993 16.6337 37.1171 16.9245 37.4042 17.0748L40.9447 23.6689C36.5708 24.6939 33.3003 28.6178 33.3003 33.2994C33.3003 34.4181 33.5046 35.4854 33.8484 36.4881L30.2045 39.2213C28.5 36.2271 25.2853 34.1995 21.5999 34.1995C16.4449 34.1995 12.2024 38.1612 11.7462 43.1991H7.07197C6.66973 41.6512 5.272 40.4992 3.59985 40.4992C1.61457 40.499 0 42.1136 0 44.099C0 46.0844 1.61457 47.6988 3.59985 47.6988C5.272 47.6988 6.66962 46.5468 7.07197 44.9989H11.7581C12.0398 48.0876 13.7326 50.7722 16.2004 52.3859V49.5132C16.2004 48.0166 17.4523 46.7989 18.9894 46.7989H24.211C25.749 46.7989 27.0001 48.0166 27.0001 49.5132V52.3859C29.1123 51.0054 30.6548 48.8373 31.2362 46.3057L37.1345 49.1541C36.9896 49.5438 36.8997 49.9605 36.8997 50.3997C36.8997 52.3851 38.5142 53.9995 40.4995 53.9995C42.4849 53.9995 44.0993 52.385 44.0993 50.3997C44.0993 48.4144 42.4848 46.7998 40.4995 46.7998C39.6149 46.7998 38.8148 47.1328 38.1875 47.6638L31.4792 44.4249C31.4827 44.3151 31.4998 44.2098 31.4998 44.0999C31.4998 42.9804 31.3045 41.9085 30.9608 40.9041L34.5976 38.1763C35.3814 39.5496 36.4794 40.7223 37.8005 41.5863V38.7136C37.8005 37.2169 39.0524 35.9992 40.5896 35.9992H45.8112C47.3492 35.9992 48.6002 37.2169 48.6002 38.7136V41.5863C51.3055 39.8169 53.1001 36.766 53.1001 33.2993C53.1001 27.8418 48.6587 23.4005 43.2004 23.4005ZM9.9015 22.5005C7.91612 22.5005 6.30165 20.886 6.30165 18.9007C6.30165 16.9154 7.91622 15.3008 9.9015 15.3008C11.8868 15.3008 13.5013 16.9154 13.5013 18.9007C13.5013 20.886 11.8859 22.5005 9.9015 22.5005ZM31.5008 10.801C29.5154 10.801 27.9009 9.18639 27.9009 7.20111C27.9009 5.21583 29.5155 3.60127 31.5008 3.60127C33.4861 3.60127 35.1006 5.21583 35.1006 7.20111C35.1006 9.18639 33.4852 10.801 31.5008 10.801ZM21.6011 44.9997C19.6157 44.9997 18.0012 43.3852 18.0012 41.3999C18.0012 39.4145 19.6158 37.8001 21.6011 37.8001C23.5864 37.8001 25.2009 39.4146 25.2009 41.3999C25.2009 43.3853 23.5855 44.9997 21.6011 44.9997ZM43.2004 34.2001C41.215 34.2001 39.6005 32.5855 39.6005 30.6003C39.6005 28.6149 41.2151 27.0004 43.2004 27.0004C45.1856 27.0004 46.8002 28.615 46.8002 30.6003C46.8002 32.5865 45.1848 34.2001 43.2004 34.2001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.6011 43.1999C22.5952 43.1999 23.4011 42.394 23.4011 41.3999C23.4011 40.4059 22.5952 39.6 21.6011 39.6C20.607 39.6 19.8011 40.4059 19.8011 41.3999C19.8011 42.394 20.607 43.1999 21.6011 43.1999Z"
                      fill="currentColor"
                    />
                    <path
                      d="M24.2119 48.5997H18.9903C18.4449 48.5997 18.0012 49.0101 18.0012 49.5141V53.312C19.1189 53.7503 20.3303 53.9996 21.6011 53.9996C22.8718 53.9996 24.0832 53.7502 25.2009 53.312V49.5141C25.2009 49.011 24.7572 48.5997 24.2119 48.5997Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_137_7483">
                      <rect width="54" height="54" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>Think you know job search? Think again</p>
              <p>
                We provide best practices and use cases to make jobs work for
                all involved.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3 mb-md-0">
            <div className="card h-100">
              <div className="image-parent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="54"
                  viewBox="0 0 55 54"
                  fill="none"
                >
                  <path
                    d="M29.021 33.75H10.4585C9.52576 33.75 8.771 34.5048 8.771 35.4375V38.8125C8.771 39.7452 9.52576 40.5 10.4585 40.5H29.021C29.9537 40.5 30.7085 39.7452 30.7085 38.8125V35.4375C30.7085 34.5048 29.9537 33.75 29.021 33.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M38.3022 3.375C31.3237 3.375 25.646 9.0527 25.646 16.0312C25.646 23.0098 31.3237 28.6875 38.3022 28.6875C45.2808 28.6875 50.9585 23.0098 50.9585 16.0312C50.9585 9.0527 45.2808 3.375 38.3022 3.375ZM39.8843 22.1576V22.3594C39.8843 23.2338 39.1767 23.9414 38.3022 23.9414C37.4278 23.9414 36.7202 23.2338 36.7202 22.3594H36.3247C35.4503 22.3594 34.7427 21.6518 34.7427 20.7773C34.7427 19.9029 35.4503 19.1953 36.3247 19.1953H38.6978C39.1334 19.1953 39.4888 18.84 39.4888 18.4043C39.4888 17.9686 39.1334 17.6133 38.6978 17.6133H37.9067C35.7253 17.6133 33.9517 15.8397 33.9517 13.6582C33.9517 11.8928 35.121 10.4123 36.7202 9.90493V9.70312C36.7202 8.82868 37.4278 8.12109 38.3022 8.12109C39.1767 8.12109 39.8843 8.82868 39.8843 9.70312C40.7587 9.70312 41.4663 10.4107 41.4663 11.2852C41.4663 12.1596 40.7587 12.8672 39.8843 12.8672H37.9067C37.4711 12.8672 37.1157 13.2225 37.1157 13.6582C37.1157 14.0939 37.4711 14.4492 37.9067 14.4492H38.6978C40.8792 14.4492 42.6528 16.2228 42.6528 18.4043C42.6528 20.1697 41.4835 21.6502 39.8843 22.1576Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.521 8.4375H13.7632C12.87 8.4375 12.146 7.71346 12.146 6.82031V5.0625C12.146 4.12976 11.3912 3.375 10.4585 3.375C9.52576 3.375 8.771 4.12976 8.771 5.0625V6.82031C8.771 7.71346 8.04696 8.4375 7.15381 8.4375H5.396C4.46326 8.4375 3.7085 9.19226 3.7085 10.125C3.7085 11.0577 4.46326 11.8125 5.396 11.8125H7.15381C8.04696 11.8125 8.771 12.5365 8.771 13.4297V15.1875C8.771 16.1202 9.52576 16.875 10.4585 16.875C11.3912 16.875 12.146 16.1202 12.146 15.1875V13.4297C12.146 12.5365 12.87 11.8125 13.7632 11.8125H15.521C16.4537 11.8125 17.2085 11.0577 17.2085 10.125C17.2085 9.19226 16.4537 8.4375 15.521 8.4375Z"
                    fill="currentColor"
                  />
                  <path
                    d="M49.271 40.5H47.5132C46.62 40.5 45.896 39.776 45.896 38.8828V37.125C45.896 36.1923 45.1412 35.4375 44.2085 35.4375C43.2758 35.4375 42.521 36.1923 42.521 37.125V38.8828C42.521 39.776 41.797 40.5 40.9038 40.5H39.146C38.2133 40.5 37.4585 41.2548 37.4585 42.1875C37.4585 43.1202 38.2133 43.875 39.146 43.875H40.9038C41.797 43.875 42.521 44.599 42.521 45.4922V47.25C42.521 48.1827 43.2758 48.9375 44.2085 48.9375C45.1412 48.9375 45.896 48.1827 45.896 47.25V45.4922C45.896 44.599 46.62 43.875 47.5132 43.875H49.271C50.2037 43.875 50.9585 43.1202 50.9585 42.1875C50.9585 41.2548 50.2037 40.5 49.271 40.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.9585 43.875H22.271H20.5835H17.2085H12.146H8.771H7.0835H5.396C4.46326 43.875 3.7085 44.6298 3.7085 45.5625V48.9375C3.7085 49.8702 4.46326 50.625 5.396 50.625H7.0835H8.771H12.146H17.2085H20.5835H22.271H23.9585C24.8912 50.625 25.646 49.8702 25.646 48.9375V45.5625C25.646 44.6298 24.8912 43.875 23.9585 43.875ZM8.771 48.9375V45.5625H12.146V48.9375H8.771ZM17.2085 48.9375V45.5625H20.5835V48.9375H17.2085Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.9585 23.625H22.271H20.5835H17.2085H12.146H8.771H7.0835H5.396C4.46326 23.625 3.7085 24.3798 3.7085 25.3125V28.6875C3.7085 29.6202 4.46326 30.375 5.396 30.375H7.0835H8.771H12.146H17.2085H20.5835H22.271H23.9585C24.8912 30.375 25.646 29.6202 25.646 28.6875V25.3125C25.646 24.3798 24.8912 23.625 23.9585 23.625ZM8.771 28.6875V25.3125H12.146V28.6875H8.771ZM17.2085 28.6875V25.3125H20.5835V28.6875H17.2085Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p>Our marketplace provides rewards</p>
              <p>We make earning extra income from our marketplace seamless</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 third">
        <div className="row">
          <div className="col-md-6">
            {/* <img src={secondImg} alt="secondImg" className="w-100" /> */}
            <BounceHead />
          </div>
          <div className="col-md-6">
            <p className="tag-third fit-content">
              You have more options than you know!
            </p>
            <p className="main-heading">
              Find your dream job on our <strong>marketplace</strong>
            </p>
            <p className="sub-heading">
              Learn more about the position and company from someone who are in
              a position to hire you
            </p>
            <div className="d-flex align-items-center gap-3 button-parent flex-column flex-md-row">
              <PrimaryButton
                margin="0 0 24px 0"
                className="fit-content landing"
              >
                Request to connect
              </PrimaryButton>
              <Button className="landing max-w-100">Learn more</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 third">
        <div className="row">
          <div className="col-md-6 order-2 order-md-1">
            <p className="tag-third fit-content">
              Automation technology helps you screen jobs and networking
              requests!
            </p>
            <p className="main-heading">
              Discover the right <strong>talent</strong> to hire marketplace
            </p>
            <p className="sub-heading">
              Connect with and prescreen candidates who match the job
              requirements
            </p>
            <div className="d-flex align-items-center gap-3 button-parent flex-column flex-md-row">
              <PrimaryButton
                margin="0 0 24px 0"
                className="fit-content landing"
              >
                Post a job
              </PrimaryButton>
              <Button className="landing max-w-100">Learn more</Button>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            {/* <img src={fourthImg} alt="fourthImg" className="w-100" /> */}
            <SpeakLoud />
          </div>
        </div>
      </section>
      <section className="w-100 four-x">
        <div className="cards-wrapper">
          <div className="cards">
            <p className="main-heading">
              {counterOn && (
                <>
                  <CountUp duration={3} end={4} className="counter" />x
                </>
              )}
            </p>
            <p className="sub-heading">
              4 times more likely to land a job than website applicants
            </p>
          </div>
          <div className="cards">
            {/* <div className="border-y"> */}
            <p className="main-heading">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(true)}
              >
                {counterOn && (
                  <>
                    <CountUp duration={3} end={250} className="counter" />+
                  </>
                )}
              </ScrollTrigger>
            </p>
            <p className="sub-heading">
              The average corporate job opening receives 250+ applications.
            </p>
            {/* </div> */}
          </div>
          <div className="cards">
            <p className="main-heading">
              {counterOn && (
                <>
                  <CountUp duration={3} end={80} className="counter" />%
                </>
              )}
            </p>
            <p className="sub-heading">
              of jobs are filled through networking and personal relationships
            </p>
          </div>
        </div>
      </section>
      <section className="w-100 third ps-md-0">
        <div className="row">
          <div className="col-md-6">
            <SlideInLeftImage imgSrc={fifthImg} alt="fifthImg" />
          </div>
          <div className="col-md-6">
            <p className="tag-third fit-content">ePosting is device friendly</p>
            <p className="main-heading">Device friendly solution</p>
            <p className="sub-heading">
              We hear you. We provide secure and convenient tools at your finger
              tips for simple, anytime access through your mobile devices
            </p>
            <div className="d-flex align-items-center gap-3 button-parent flex-column flex-md-row">
              <PrimaryButton
                margin="0 0 24px 0"
                className="fit-content landing"
              >
                Download App
              </PrimaryButton>
              <Button className="landing max-w-100">Learn more</Button>
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
        <PrimaryButton className="fit-content landing">
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

export default LandingPage;

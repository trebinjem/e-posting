import styled from "styled-components";

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  .btn-group {
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px 0;
      > button {
        width: 100%;
      }
    }
  }
  .first {
    /* background-image: url("src/assets/images/landing-page.png"); */
    /* background-size: contain; */
    /* background-repeat: no-repeat; */
    /* background-color: #fff; */
    padding-bottom: 40px;
    height: 100%;
    padding-top: 211px;
    &.contact-us-page {
      background-image: none;
      padding-bottom: 0px;
    }
    @media (max-width: 992px) {
      padding-top: 170px;
      background-image: none;
      /* background-color: #564db4; */
    }
    @media (max-width: 768px) {
      padding-top: 120px;
    }
  }
  .second {
    padding: 0 20px;
    margin-top: -100px;
    margin-bottom: 180px;

    .card-wrapper {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      gap: 20px;
      .card {
        min-width: 350px;
        &:hover {
          box-shadow: 0px 4px 16px 0px rgba(168, 170, 174, 0.45);
        }
      }
      @media (max-width: 768px) {
        .card {
          padding: 24px 0px;
          min-width: 200px;
          p {
            font-size: 18px !important;
            line-height: 36px !important;
            margin-bottom: 0 !important;
          }
        }
      }
    }
    @media (max-width: 992px) {
      padding: 50px 0px 50px 20px;

      margin-bottom: 50px;
    }
    @media (max-width: 576px) {
      .main-heading {
        text-align: left !important;
        font-size: 24px !important;
        line-height: normal !important;
      }
    }
    .main-heading {
      color: var(--Heading, #1f2d3e);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 46px;
      margin: 0 auto 64px auto;
      max-width: 1222px;
    }
    .card {
      padding: 48px 32px;
      border-radius: 8px;
      border: 1.333px solid var(--Secondary-Secondary---200, #dcdddf);
      background: var(--Extra-White, #fff);
      cursor: pointer;
      transition: 0.5s all;
      &:hover {
        background: var(--primary-primary-500-base, #7367f0);
        box-shadow: 0px 4px 16px 0px rgba(115, 103, 240, 0.45);
        .image-parent {
          background-color: #fff;
          svg {
            color: var(--primary-primary-500-base, #7367f0);
          }
        }
        p {
          color: #fff;
        }
      }
      .image-parent {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 13.333px;
        padding: 13px;
        width: 100px;
        height: 100px;
        margin: 0 auto 32px auto;
        background: var(--primary-primary-500-base, #7367f0);
        svg {
          color: #fff;
        }
      }
      p {
        color: #242745;
        text-align: center;
        margin: 0;
        &:first-of-type {
          margin-bottom: 13px;
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 42px; /* 138.462% */
        }
        &:last-of-type {
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 42px; /* 133.333% */
        }
      }
      @media (max-width: 992px) {
        margin-bottom: 15px;
      }
    }
  }
  .equal {
    background: var(--secondary-secondary-8, rgba(168, 170, 174, 0.08));
    padding: 133px 20px;

    @media (max-width: 768px) {
      padding: 60px 56px;
    }
    p {
      color: var(--Extra-Dark, #4b4b4b);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Public Sans";
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 68px; /* 141.667% */
      &:last-of-type {
        color: var(--Extra-Semi-Dark, #242745);
        text-align: center;
        font-feature-settings: "clig" off, "liga" off;
        font-family: "Public Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px; /* 150% */
        max-width: 520px;
        margin: 0 auto 32px auto;
      }
      @media (max-width: 768px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 13.281px;
        &:last-of-type {
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
        }
      }
    }
  }
  .have-job {
    padding: 140px 0;
    @media (max-width: 768px) {
      padding: 30px 0 100px 0;
    }
    .custom-padding-bg {
      padding-left: 150px;
      @media (max-width: 768px) {
        padding-left: 0;
      }
    }
    .shape-circle {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
      padding: 297px 0;
      background-image: url("src/assets/images/blue-shape-hover.png");

      transition: 0.7s all;
      &:hover {
        color: var(--Extra-White, #fff);
        background-image: url("src/assets/images/blue-shape.png");
        transition: 0.7s all;
        .shape-circle-content {
          p {
            color: var(--Extra-White, #fff);
          }
        }
      }
      &.pink {
        color: var(--Extra-Dark, #4b4b4b);
        background-image: url("src/assets/images/pink-shape.png");
        .shape-circle-content {
          p {
            color: var(--Extra-Dark, #4b4b4b);
          }
        }
        &:hover {
          background-image: url("src/assets/images/pink-shape-hover.png");
          color: var(--Extra-White, #fff);
          transition: 0.7s all;
          .shape-circle-content {
            p {
              color: var(--Extra-White, #fff);
            }
          }
        }
      }
      .shape-circle-content {
        p {
          color: var(--Extra-White, #4d4d4d);
          /* Basic Typography/H2 Heading */
          font-family: "Public Sans";
          font-size: 32px;
          font-style: normal;
          font-weight: 600;
          line-height: 44px; /* 137.5% */
          &:last-of-type {
            font-family: "Public Sans";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 38px; /* 158.333% */
            max-width: 427px;
          }
        }
      }
    }
  }
  @media (max-width: 1366px) {
    .have-job {
      .shape-circle {
        margin-top: 100px;
        padding: 126px 15px;
        height: auto;
        background-size: 100% 100%;
        /* &.pink {
          padding
      } */
        .shape-circle-content {
          p {
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: 34px;
            margin-bottom: 12px;
            &:last-of-type {
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 29px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .have-job {
      .shape-circle {
        margin-top: 100px;
        padding: 126px 15px;
        height: auto;
        background-size: 100% 100%;
        color: var(--Extra-Dark, #4b4b4b);
        background-image: url("src/assets/images/pink-shape-mobile-hover.png");
        transition: 0.7s all;
        &:hover {
          color: #fff;
          background-image: url("src/assets/images/pink-shape-mobile.png");
          transition: 0.7s all;
          .shape-circle-content {
            p {
              color: #fff;
            }
          }
        }
        &.pink {
          .shape-circle-content {
            p {
              color: var(--Extra-Dark, #4b4b4b);
            }
          }
          color: var(--Extra-Dark, #4b4b4b);
          background-image: url("src/assets/images/blue-shape-mobile-hover.png");
          &:hover {
            transition: 0.7s all;
            background-image: url("src/assets/images/blue-shape-mobile.png");
            color: #fff;
            .shape-circle-content {
              p {
                color: #fff;
              }
            }
          }
        }
        .shape-circle-content {
          p {
            color: var(--Extra-Dark, #4b4b4b);
            font-family: "Public Sans";
            font-size: 22.258px;
            font-style: normal;
            font-weight: 600;
            line-height: 30.605px; /* 137.5% */
            margin-bottom: 12px;
            &:last-of-type {
              font-family: "Public Sans";
              font-size: 16.694px;
              font-style: normal;
              font-weight: 400;
              line-height: 23.649px; /* 141.667% */
            }
          }
        }
      }
    }
  }
  .dark-cards {
    background: var(
      --Gray-Gray---900,
      linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.1) 100%
      ),
      #4b465c
    );
    padding: 84px 92px 150px 92px;
    p {
      color: var(--Extra-White, #fff);

      /* Basic Typography/Display 1 */
      font-family: "Public Sans";
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 84px; /* 131.25% */
      &.sub-content {
        font-family: "Public Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px; /* 211.111% */
      }
    }
    @media (max-width: 768px) {
      padding: 40px 15px 80px 15px;
      p {
        text-align: left;
        color: var(--Extra-White, #fff);
        font-family: "Public Sans";
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 136.364% */
        &.sub-content {
          color: var(--Extra-White, #fff);
          font-family: "Public Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 171.429% */
        }
      }
    }
  }
  .third {
    padding: 0 141px;
    margin-bottom: 100px;
    @media (max-width: 992px) {
      padding: 0 15px;
      margin-bottom: 80px;
    }
    &.ps-0 {
      margin-bottom: 140px;
    }
    .tag-third {
      margin-bottom: 48px;
      padding: 10px 18px;
      color: var(--Extra-Dark, #4b4b4b);
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
      border-radius: 1333.333px;
      background: var(
        --Secondary-Secondary---100,
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.8) 100%
        ),
        #a8aaae
      );

      @media (max-width: 992px) {
        margin: 70px 0 20px 0;
      }
    }
    .main-heading {
      color: var(--Extra-Semi-Dark, #242745);
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 84px; /* 131.25% */
      margin-bottom: 32px;
      max-width: 670px;
      strong {
        font-weight: 700;
        color: #7367f0;
      }
      @media (max-width: 992px) {
        font-size: 34px;
        line-height: 44px;
      }
    }
    .sub-heading {
      color: var(--Typography-Color-Body-Text, #4b465c);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
      margin-bottom: 64px;

      @media (max-width: 992px) {
        margin: 0px 0 30px 0;
      }
    }
  }
  .contact-us-section {
    padding: 50px 100px 181px 100px;
    @media (max-width: 1366px) {
      padding: 120px 35px 181px 35px;
    }
    @media (max-width: 768px) {
      padding: 40px 30px;
    }
    .main-heading {
      color: var(--Extra-Dark, #4b4b4b);
      font-family: Public Sans;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 78px; /* 139.286% */
      margin-bottom: 28px;
      @media (max-width: 768px) {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 0;
      }
    }
    .sub-heading {
      color: var(--Extra-Dark, #4b4b4b);
      font-family: Public Sans;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 44px; /* 137.5% */
      margin-bottom: 28px;
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 25px;
      }
    }
    button.landing {
      border-color: #7367f0;
      color: #7367f0;
      &:hover {
        color: #fff;
      }
    }
    .form-custom {
      border-radius: 8px;
      background: var(
        --Gray-Gray---100,
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.95) 0%,
          rgba(255, 255, 255, 0.95) 100%
        ),
        #4b465c
      );
      padding: 32px;
      @media (max-width: 768px) {
        padding: 15px;
      }
    }
  }
  .four-x {
    padding: 0 100px;
    margin-bottom: 140px;
    @media (max-width: 992px) {
      padding: 0 30px;
      margin-bottom: 80px;
    }
    .cards-wrapper {
      display: flex;
      align-items: start;
      gap: 0 100px;
      justify-content: center;
      .cards {
        width: calc(100% / 3 - 100px);
      }
      @media (max-width: 992px) {
        gap: 0 25px;
        .cards {
          width: calc(100% / 3 - 25px);
        }
      }
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 25px;
        .cards {
          width: calc(100% / 1 - 50px);
        }
        .main-heading {
          font-size: 45px;
          line-height: normal;
        }
      }
    }
    .main-heading {
      color: var(--Extra-Semi-Dark, #242745);
      font-size: 90px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 108px */
      letter-spacing: -2.7px;
      margin-bottom: 12px;
    }
    .sub-heading {
      color: var(--Typography-Color-Body-Text, #4b465c);
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 136.364% */
      max-width: 400px;
      margin: 0;
    }
    .border-y {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: calc(50% - 50px);
        left: -100px;
        width: 1px;
        height: 100px;
        background: rgba(131, 131, 131, 0.5);
      }
      &::after {
        content: "";
        position: absolute;
        top: calc(50% - 50px);
        right: 0px;
        width: 1px;
        height: 100px;
        background: rgba(131, 131, 131, 0.5);
      }
    }
  }
  .account {
    text-align: center;
    padding: 66px 84px;
    margin: 0 auto -100px auto;
    width: calc(100% - 100px);
    max-width: 1700px;
    border-radius: 8px;
    background: var(--Primary-Primary---100, #e3e1fc);
    position: relative;
    @media (max-width: 992px) {
      padding: 66px 34px;
    }
    @media (max-width: 768px) {
      padding: 36px 25px;
      width: 100%;
      margin-bottom: 0;
      margin-top: 30px;
      .main-heading {
        font-size: 16px !important;
        font-style: normal !important;
        font-weight: 600 !important;
        line-height: 24px !important; /* 150% */
        max-width: 270px !important;
        margin: auto auto 10px auto !important;
      }
      .sub-heading {
        color: var(--Extra-Semi-Dark, #242745) !important;
        font-size: 12px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        line-height: 24px !important;
        margin-bottom: 10px !important;
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 400px;
      height: 100%;
      /* background-size: 100%; */

      background-repeat: no-repeat;
      background-image: url("src/assets/images/account-left.png");
      @media (max-width: 576px) {
        width: 150px;
        height: 150px;
        background-size: contain;
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 400px;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("src/assets/images/account-right.png");
      fill: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
      opacity: 0.2;
      mix-blend-mode: color-burn;
      @media (max-width: 576px) {
        width: 150px;
        height: 150px;
        background-size: contain;
        top: calc(100% - 150px);
      }
    }
    .main-heading {
      color: var(--Extra-Semi-Dark, #242745);
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 44px; /* 137.5% */
      margin-bottom: 12px;
    }
    .sub-heading {
      color: var(--Extra-Semi-Dark, #242745);
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 136.364% */
      margin-bottom: 48px;
    }
  }
  .mt-150 {
    margin-top: 150px;
    @media (max-width: 991px) {
      margin-top: 80px;
    }
  }
  footer {
    padding: 160px 160px 54px 160px;
    background: var(--Primary-Primary---900, #564db4);
    @media (max-width: 1366px) {
      padding: 160px 50px 54px 50px;
    }
    @media (max-width: 768px) {
      padding: 14px 30px 54px 30px;
    }
    .contents {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .heading {
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 136.364% */
        margin-bottom: 12px;
        @media (max-width: 768px) {
          margin-top: 30px;
        }
      }
      p {
        margin: 0;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
      }
    }
    .row {
      margin-bottom: 65px;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    .copy-right {
      padding-top: 42px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      gap: 32px;
      @media (max-width: 768px) {
        gap: 10px;
        flex-direction: column;
        justify-content: center;
      }
      span {
        color: var(--Extra-White, #fff);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
`;

const Header = styled.header`
  position: fixed !important;
  width: calc(100% - 184px);
  top: 20px;
  margin: 0 92px 132px 92px;
  padding: 48px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  border-radius: 100px;
  max-height: 96px;
  background: var(--primary-primary-500-base, #7367f0);
  z-index: 999;
  span {
    cursor: pointer;
  }
  &.contact-us-page {
    background-color: #7367f0;
    padding: 23px 92px;
  }
  @media (max-width: 1200px) {
    padding: 20px 15px;
    top: 0px;
    margin: 36px 25px 112px 25px;
    width: calc(100% - 50px);
    &.contact-us-page {
      background-color: #7367f0;
      padding: 23px 35px;
    }
  }
  @media (max-width: 991px) {
    padding: 18px 21px;
    margin: 16px 15px;
    width: calc(100% - 30px);

    .mobile-menu {
      position: fixed;
      background: #ebebeb;
      width: 300px !important;
      padding: 10px 20px;
      height: 100%;
      top: 0;
      right: -320px;
      transition: 0.5s all;
      z-index: 999;
      &.active {
        right: 0;
      }
      span {
        color: #141414;
      }
      > .d-flex {
        margin-top: 20px;
        flex-direction: column;
        align-items: flex-start !important;
        gap: 20px;
      }
      button {
        width: 100%;
      }
    }
  }
`;

const Button = styled.button`
  padding: 13px 26px;
  margin: 0;
  border: 1px solid #242745;
  color: #242745;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  border-radius: 50px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: 0.6s all;
  &.landing {
    padding: 10px 25px;
    border: 1px solid var(--primary-primary-500-base, #7367f0);
    color: #7367f0;
    &:hover {
      background-color: #685dd8;
      color: #fff;
    }
  }
  &.blue {
    padding: 10px 25px;
    border: 1px solid var(--primary-primary-500-base, #7367f0);
    color: #7367f0;
    &:hover {
      background-color: #7367f0;
      color: #fff;
    }
  }
  &.white {
    border: 1px solid var(--primary-primary-500-base, #fff);
    color: #fff;
    &.-btn {
      background-color: transparent;
      color: #fff;
    }
    @media (max-width: 991px) {
      &.-btn {
        border-color: #7367f0;
        color: #7367f0;
        &:hover {
          background-color: #7367f0;
          color: #fff;
        }
      }
    }
    &:hover {
      background-color: #fff;
      color: #7367f0;
    }
  }
  &.fill {
    border-radius: 100px;
    background: var(--primary-primary-500-base, #7367f0);
    color: #fff;
    border-color: #7367f0;
    &:hover {
      background-color: transparent;
      color: #7367f0;
    }
  }
  &:hover {
    color: #fff;
    background-color: #685dd8;
    border-color: #685dd8;
    transition: 0.6s all;
  }
  @media (max-width: 768px) {
    color: var(--Extra-White, #fff);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

const MainPost = styled.div`
  padding-left: 132px;
  color: #fff;
  @media (max-width: 1200px) {
    padding-left: 0;
  }
  @media (max-width: 992px) {
    .max-w-500 {
      margin: auto;
    }
    p {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  .max-w-500 {
    max-width: 500px;
  }
  p {
    color: var(--Extra-Dark, #4b4b4b);
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px; /* 131.25% */
    &.sub-text {
      color: var(--Extra-Dark, #4b4b4b);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Public Sans";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 181.818% */
    }
    @media (max-width: 1366px) {
      font-size: 32px;
      line-height: 44px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      &.sub-text {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    display: block;
    margin-bottom: 28px;
    line-height: 1.2;
  }
`;

const Or = styled.div`
  color: #a8aaae;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 0px;
    width: calc(50% - 50px);
    height: 1px;
    background-color: #a8aaae;
  }
  &::before {
    left: 0px;
  }
  &::after {
    left: unset;
    right: 0px;
  }
`;

const SocialButton = styled.button`
  padding: 17px 0;
  border-radius: 100px;
  background: #fff;
  color: #4b4b4b;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.5s all;
  img {
    margin-right: 10px;
    vertical-align: middle;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export { LandingPageWrapper, Header, Button, MainPost, Or, SocialButton };

import styled from "styled-components";

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  .first {
    background-image: url("src/assets/images/landing-page.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #fff;
    padding-bottom: 40px;
  }
  .second {
    padding: 119px 92px 140px 92px;
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
      border: 1.333px solid var(--Secondary-Secondary---200, #a8aaae);
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
          line-height: 36px; /* 138.462% */
        }
        &:last-of-type {
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 133.333% */
        }
      }
    }
  }
  .third {
    padding: 0 141px;
    margin-bottom: 314px;
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
    }
    .sub-heading {
      color: var(--Typography-Color-Body-Text, #4b465c);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
      margin-bottom: 64px;
    }
  }
  .four-x {
    padding: 0 100px;
    margin-bottom: 140px;
    .cards-wrapper {
      display: flex;
      align-items: start;
      gap: 0 100px;
      justify-content: center;
      .cards {
        width: calc(100% / 3 - 100px);
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
  footer {
    padding: 160px 160px 54px 160px;
    background: var(--Primary-Primary---900, #564db4);
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
    }
    .copy-right {
      padding-top: 42px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      gap: 32px;
      span {
        color: var(--Extra-White, #fff);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
      }
    }
  }
`;

const Header = styled.header`
  padding: 60px 92px;
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
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
  &:hover {
    color: #fff;
    background-color: #685dd8;
    border-color: #685dd8;
    transition: 0.6s all;
  }
`;

const MainPost = styled.div`
  margin-left: 132px;
  color: #fff;
  .max-w-500 {
    max-width: 500px;
  }
  p {
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px;
    margin: 0 0 32px 0;
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
`;

export { LandingPageWrapper, Header, Button, MainPost, Or, SocialButton };

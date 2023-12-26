import styled from "styled-components";

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("src/assets/images/landing-page.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  > div {
    padding-bottom: 40px;
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

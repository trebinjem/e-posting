import styled from "styled-components";

const InputWrapper = styled.button`
  padding: 13px;
  border-radius: 100px;
  background: #7367f0;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border: none;
  letter-spacing: 0.43px;
  outline: none;
  margin: ${(props) => props.margin || 0};
  transition: 0.5s all;
  &.landing {
    padding: 13px 25px;
    margin: 0;
    border: 1px solid #7367f0;
  }
  &:hover {
    background-color: #fff;
    color: #7367f0;
    transition: 0.5s all;
  }

  @media (max-width: 576px) {
    &.landing,
    .max-w-100 {
      width: 100% !important;
    }
  }
`;

const PrimaryButton = ({ children, margin, className }) => {
  return (
    <InputWrapper
      className={`w-100 ${className ? className : null}`}
      type="submit"
      margin={margin}
    >
      {children}
    </InputWrapper>
  );
};

export default PrimaryButton;

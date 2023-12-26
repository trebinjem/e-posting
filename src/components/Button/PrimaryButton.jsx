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
  &:hover {
    background-color: #fff;
    color: #7367f0;
    transition: 0.5s all;
  }
`;

const PrimaryButton = ({ children, margin }) => {
  return (
    <InputWrapper className={`w-100`} type="submit" margin={margin}>
      {children}
    </InputWrapper>
  );
};

export default PrimaryButton;

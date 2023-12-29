import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 18px;
  gap: 12px;
  &.contact-us {
    label {
      color: var(--Gray-Gray---900, #4b465c);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .input-parent {
    max-width: 100%;
  }
  img {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 15px;
    left: 13px;
    &.left {
      left: 13px;
    }
    &.right {
      left: unset;
      right: 13px;
    }
  }
  label {
    color: #fff;
    font-family: Public Sans;
    font-size: 12px;
    font-style: normal;
    line-height: 20px;
  }
  input {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &.highlight {
      color: #7367f0;
      cursor: pointer;
      display: inline;
    }
    &.white {
      text-decoration: underline;
      color: #fff;
      cursor: pointer;
      display: inline;
    }
  }
`;

const CheckBox = ({ type, name, value, eg, className, children }) => {
  return (
    <InputWrapper
      className={`d-flex flex-column ${className ? className : null}`}
    >
      <div className="d-flex align-items-center">
        <input type={type} name={name} id={name} value={value} />
        <label htmlFor={name}>{children}</label>
      </div>
      {eg && <span>{eg}</span>}
    </InputWrapper>
  );
};

export default CheckBox;

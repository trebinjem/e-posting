import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 18px;
  gap: 12px;
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
  }
`;

const CheckBox = ({ type, name, label, value, eg }) => {
  return (
    <InputWrapper className="d-flex flex-column">
      <div>
        <input type={type} name={name} id={name} value={value} />
        <label htmlFor={name}>{label}</label>
      </div>
      {eg && <span>{eg}</span>}
    </InputWrapper>
  );
};

export default CheckBox;

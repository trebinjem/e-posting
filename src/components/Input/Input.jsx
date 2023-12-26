import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 24px;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    padding: 13px 16px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #4b4b4b;
    border: none;
    border-radius: 8px;
    outline: none;
    &::placeholder {
      color: #4b465c;
    }
    &.left {
      padding-left: 50px;
    }
    &.right {
      padding-right: 50px;
    }
  }
  span {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 !important;
  }
`;

const Input = ({
  type,
  name,
  label,
  placeholder,
  image,
  imagePosition,
  eg,
  className,
}) => {
  return (
    <InputWrapper
      className={`d-flex flex-column ${className ? className : ""}`}
    >
      <label htmlFor={name}>{label}</label>
      <div className="position-relative w-100 input-parent">
        {image && (
          <img src={image} alt="input-icon" className={imagePosition} />
        )}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`w-100 ${imagePosition}`}
        />
      </div>
      {eg && <span>{eg}</span>}
    </InputWrapper>
  );
};

export default Input;

import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 24px;
  gap: 12px;
  &.contact-us {
    gap: 4px;
    label {
      color: var(--Extra-Dark, #4b4b4b);
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input,
    textarea {
      padding: 7px 14px;
      color: var(--Typography-Color-Muted-Text, #4b465c);
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 160% */
      border-radius: 4px;
      border: 1px solid var(--Extra-Divider, #dbdade);
      background: var(--Extra-Card-Background, #fff);
    }
  }

  &.min-w-150 {
    input {
      width: 150px !important;
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
    &.contact-us {
      top: 10px;
      width: 54px;
      height: 54px;
    }
  }
  label {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    span {
      color: red;
      font-size: 15px;
    }
  }
  input,
  textarea {
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
    &.contact-us {
      padding: 25px 82px 25px 42px;
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
  requiredStar,
}) => {
  return (
    <InputWrapper
      className={`d-flex flex-column ${className ? className : ""}`}
    >
      <label htmlFor={name}>
        {label} {requiredStar && <span>*</span>}
      </label>
      <div className="position-relative w-100 input-parent">
        {image && (
          <img src={image} alt="input-icon" className={imagePosition} />
        )}
        {type !== "textarea" ? (
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={`w-100 ${imagePosition}`}
          />
        ) : (
          <textarea
            name={name}
            id={name}
            rows={4}
            placeholder={placeholder}
            className={`w-100 ${imagePosition}`}
          ></textarea>
        )}
      </div>
      {eg && <span>{eg}</span>}
    </InputWrapper>
  );
};

export default Input;

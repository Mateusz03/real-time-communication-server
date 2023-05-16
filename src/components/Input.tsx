import React from "react";
import { styled } from "styled-components";

interface InputSettings {
  type: string;
  err: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface InputProps {
  err: boolean;
}

const Inp = styled.input<InputProps>`
  padding: 16px 32px;
  box-sizing: border-box;
  background-color: rgba(217, 217, 217, 0.2);
  color: rgba(33, 42, 62, 0.8);
  outline: none;
  border: none;
  width: 240px;
  height: 32px;
  border-radius: 5px;
  font-size: 1.15rem;
  font-family: "Righteous", cursive;

  border: ${(p) => (p.err === true ? "1px solid #ed2939" : "none")};

  &::placeholder {
    color: ${(p) => (p.err === true ? "#ed2939" : "rgba(33, 42, 62, 0.8)")};
  }
`;

const ErrMessage = styled.div`
  box-sizing: border-box;
  padding-top: 8px;
  font-size: 12px;
  height: 48px;
  color: #ed2939;
`;

const Input: React.FC<InputSettings> = ({ type, err }) => {
  return (
    <>
      <Container>
        <Inp placeholder="Nickname" err={err} maxLength={16} />
        {type === "Nick" ? (
          <ErrMessage>
            {type === "Nick" && err === true
              ? "Only numbers and letters !"
              : ""}
          </ErrMessage>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Input;

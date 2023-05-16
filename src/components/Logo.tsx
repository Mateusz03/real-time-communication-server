import React from "react";
import { styled } from "styled-components";

interface LogoSettings {
  name: string;
  position: string;
}

interface TextFieldProps {
  position: string;
}

const TextField = styled.h1<TextFieldProps>`
  @import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
  font-weight: bold;
  font-style: italic;
  font-family: "Kalam", cursive;
  margin: 0;

  font-size: ${(p) =>
    p.position === "header" ? "2rem" : p.position === "bar" ? "1.2rem" : ""};
  color: #212a3e;
`;

const Logo: React.FC<LogoSettings> = ({ name, position }) => {
  return (
    <>
      <TextField position={position}>{name}</TextField>
    </>
  );
};

export default Logo;

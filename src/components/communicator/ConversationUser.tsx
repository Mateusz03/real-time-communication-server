import React from "react";
import { styled } from "styled-components";

interface ConversionUserSettings {
  username: string;
}

const Container = styled.div`
  margin-bottom: 100%;
`;

const Text = styled.p`
  color: rgba(33, 42, 62, 0.8);
  text-align: center;
  margin: 0;
`;

const User = styled.h1`
  margin: 0;
  text-align: center;
  color: #212a3e;
`;

const ConversionUser: React.FC<ConversionUserSettings> = ({ username }) => {
  return (
    <>
      <Container>
        <Text>
          Conversation <br />
          with
        </Text>
        <User>{username}</User>
      </Container>
    </>
  );
};
export default ConversionUser;

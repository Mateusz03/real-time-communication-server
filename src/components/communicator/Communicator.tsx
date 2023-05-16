import React from "react";
import { styled } from "styled-components";
import { Button, Logo, Input } from "../provider";
import ConversionUser from "./ConversationUser";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftBar = styled.div`
  box-sizing: border-box;
  padding: 64px 0px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  flex: 4 1;
  background-color: rgba(241, 246, 249, 0.45);
  border-radius: 0px 20px 20px 0px;
  box-sizing: border-box;
  padding: 64px 64px;
`;

const Communicator: React.FC<{}> = () => {
  return (
    <>
      <Container>
        <LeftBar>
          <Logo name="RT Communicator" position="bar" />
          <ConversionUser username="Papaj2" />
          <Button type="Exit" />
        </LeftBar>
        <Main></Main>
      </Container>
    </>
  );
};
export default Communicator;

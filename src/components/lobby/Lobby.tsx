import React from "react";
import { Button, Logo, Input } from "../provider";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Main = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface LobbySettings {}

const Lobby: React.FC<LobbySettings> = () => {
  return (
    <>
      <Header>
        <Logo name="RT Communicator" position="header" />
        <Button type="URL" />
      </Header>
      <Main>
        <Input type="Nick" err={false} />
        {
          //Here is error message with not pass an callback from backend
        }
        <Button type="Ready" />
      </Main>
    </>
  );
};

export default Lobby;

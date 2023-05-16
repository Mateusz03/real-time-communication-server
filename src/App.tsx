import React from "react";
import GlobalStyle from "./globalStyle";
import MainContainer from "./components/main container/MainContainer";
import { styled } from "styled-components";

interface AppSettings {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC<AppSettings> = () => {
  return (
    <Container>
      <GlobalStyle />
      <MainContainer />
    </Container>
  );
};

export default App;

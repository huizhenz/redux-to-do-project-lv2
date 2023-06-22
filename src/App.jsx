import { styled } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Todolist from "./components/Todolist";
import Input from "./components/Input";
import Router from "./shared/Router";

const StApp = styled.div`
  max-width: 1200px;
  min-width: 800px;
  border: 10px solid rgb(188, 220, 250);
  padding: 15px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin: 30px 0px 30px 0px;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <StApp>
        <Header>
          <h1>✔️ 투두리스트</h1>
        </Header>
        <main>
          <Router></Router>
          <Input />
          <Todolist ListisDone={false} />
          <Todolist ListisDone={true} />
        </main>
        <footer></footer>
      </StApp>
    </>
  );
}

export default App;

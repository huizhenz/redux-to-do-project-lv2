import React from "react";
import { styled } from "styled-components";
import Todolist from "../components/Todolist";
import Input from "../components/Input";

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

function Home() {
  return (
    <>
      <StApp>
        <Header>
          <h1>✔️ 투두리스트</h1>
        </Header>
        <main>
          <Input />
          <Todolist ListisDone={false} />
          <Todolist ListisDone={true} />
        </main>
      </StApp>
    </>
  );
}

export default Home;

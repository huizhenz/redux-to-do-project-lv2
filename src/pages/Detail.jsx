import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ToDoBox = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background-color: rgb(188, 220, 250);
  border-radius: 15px;
  box-shadow: 3px 4px 7px gray;
  text-align: center;
  padding-top: 30px;
`;

const ToDoTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

const ToDoContent = styled.p`
  font-size: 20px;
  margin-bottom: 100px;
`;

const ReturnHomeBtn = styled.p`
  position: absolute;
  top: -10%;
  left: 5%;
  font-size: 50px;
`;

function Detail() {
  // 여기에서 store에 접근하여, userSelector를 사용하여 todos 값 가져오기
  const todos = useSelector((state) => {
    return state.todos;
  });

  // 파라미터 값을 알려주는 useParams 훅
  const params = useParams();

  // 선택된 to do의 id와 해당 파라미터 id가 같다면 선택된 객체를 반환
  const foundToDo = todos.find((todo) => {
    return todo.id === params.id;
  });

  return (
    <Box>
      <ToDoBox>
        <ToDoTitle>{foundToDo.title}</ToDoTitle>
        <ToDoContent>{foundToDo.content}</ToDoContent>
        <p> id : {foundToDo.id}</p>
        <Link to="/">
          <ReturnHomeBtn>✔️</ReturnHomeBtn>
        </Link>
      </ToDoBox>
    </Box>
  );
}

export default Detail;

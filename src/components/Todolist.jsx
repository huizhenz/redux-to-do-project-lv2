import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import bgImg from "../img/bgImg.jpg";

function Todolist({ ListisDone }) {
  // 여기에서 store에 접근하여, todos의 값을 읽어보고 싶다 !
  // userSelector라는 훅
  const todos = useSelector((state) => {
    return state.todos;
  });

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  const ToDoListContainer = styled.div`
    background-image: url(${bgImg});
    background-size: 1200px 1050px;
    background-repeat: repeat-y;
  `;

  const ToDoListTitle = styled.h2`
    text-align: center;
    background-color: rgb(188, 220, 250);
    padding: 5px;
  `;

  const ToDoList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `;

  const ToDoListCard = styled.div`
    position: relative;
    width: 240px;
    background-color: rgb(244, 244, 138);
    box-shadow: 3px 4px 7px gray;
    text-align: center;
    margin: 15px;
    padding: 15px;
  `;

  const TodoTitle = styled.h2`
    margin: 13px;
    cursor: pointer;
  `;

  const PinEmoticon = styled.p`
    position: absolute;
    top: -10%;
    left: 5%;
    font-size: 25px;
  `;

  const DeleteBtn = styled.button`
    width: 70px;
    background-color: rgba(255, 255, 255, 0.431);
    border: 2px solid rgb(210, 86, 86);
    border-radius: 15px;
    font-weight: bold;
    margin: 20px 10px 0px 0px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(255, 255, 255);
    }
  `;

  const ToggleBtn = styled.button`
    width: 70px;
    background-color: rgba(255, 255, 255, 0.431);
    border: 2px solid rgb(137, 204, 118);
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(255, 255, 255);
    }
  `;

  return (
    <>
      <div>
        <ToDoListTitle>
          {!ListisDone ? "[ 진행중.. 🐣 ]" : "[ 완료..! 🐥 ]"}
        </ToDoListTitle>
        <ToDoListContainer>
          <ToDoList>
            {todos
              .filter((item) => item.isDone === ListisDone)
              .map((todo) => {
                return (
                  <ToDoListCard key={todo.id}>
                    <PinEmoticon>📌</PinEmoticon>
                    <TodoTitle>{todo.title}</TodoTitle> <p>{todo.content}</p>
                    <DeleteBtn
                      onClick={() => {
                        dispatch(deleteTodo(todos, todo.id));
                      }}
                    >
                      삭제
                    </DeleteBtn>
                    <ToggleBtn
                      onClick={() => {
                        dispatch(toggleStatusTodo(todos, todo.id));
                      }}
                    >
                      {!ListisDone ? "완료" : "취소"}
                    </ToggleBtn>
                  </ToDoListCard>
                );
              })}
          </ToDoList>
        </ToDoListContainer>
      </div>
    </>
  );
}

export default Todolist;

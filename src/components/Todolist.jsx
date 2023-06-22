import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import bgImg from "../img/bgImg.jpg";
import { Link } from "react-router-dom";

function Todolist({ ListisDone }) {
  // 여기에서 store에 접근하여, userSelector를 사용하여 todos 값 가져오기
  const todos = useSelector((state) => {
    return state.todos;
  });

  // dispatch 가져오기
  const dispatch = useDispatch();

  const ToDoListContainer = styled.div`
    background-image: url(${bgImg});
    background-size: 1200px 1000px;
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
    height: 160px;
    background-color: ${(props) => props.backgroudColor};
    box-shadow: 3px 4px 7px gray;
    text-align: center;
    margin: 15px;
    padding: 15px;
  `;

  const ToDoTitle = styled.h2`
    margin: 15px;
  `;

  const PinEmoticon = styled.p`
    position: absolute;
    top: -9%;
    left: 3%;
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
    border: 2px solid rgb(107, 125, 255);
    border-radius: 15px;
    font-weight: bold;
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
                  <ToDoListCard
                    backgroudColor={
                      !ListisDone ? "rgb(245, 245, 163)" : "rgb(255, 222, 230)"
                    }
                  >
                    <Link to={`/detail/${todo.id}`}>
                      <PinEmoticon>➕</PinEmoticon>
                    </Link>
                    <ToDoTitle>{todo.title}</ToDoTitle>
                    <p>{todo.content}</p>
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

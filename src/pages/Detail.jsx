import React from "react";
import { useSelector } from "react-redux";

function Detail() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <>
      {todos.map((todo) => {
        return <p>{todo.title}</p>;
      })}
    </>
  );
}

export default Detail;

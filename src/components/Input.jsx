import { styled } from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  const InputForm = styled.form`
    max-width: 1200px;
    min-width: 800px;
    background-color: rgb(212, 212, 212);
    text-align: center;
    margin: 30px 0px 30px 0px;
    padding: 20px;
  `;

  const InputLabel = styled.label`
    font-size: 18px;
    font-weight: bold;
  `;

  const Input = styled.input`
    width: 230px;
    font-size: 18px;
    margin: 0px 40px 0px 10px;
    padding: 5px;
  `;

  const InputBtn = styled.button`
    width: 80px;
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    border-radius: 7px;
    margin-left: 30px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      color: rgb(255, 255, 255);
      background-color: rgb(0, 0, 0);
    }
  `;

  return (
    <>
      <InputForm
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addTodo(title, content));
          setTitle("");
          setContent("");
        }}
      >
        <InputLabel>제목</InputLabel>
        <Input
          placeholder=" 입력해 주세요... "
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <InputLabel>내용</InputLabel>
        <Input
          placeholder=" 입력해 주세요... "
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <InputBtn type="submit">등록</InputBtn>
      </InputForm>
    </>
  );
}

export default Input;

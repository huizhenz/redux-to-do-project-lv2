import uuid from "react-uuid";

// action value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";

// action creator : action value를 return하는 함수
// 새로운 todo 객체를 추가하는 함수
export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: uuid(),
      title,
      content,
      isDone: false,
    },
  };
};

// 특정 todo를 삭제하는 함수
export const deleteTodo = (todos, id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  return {
    type: DELETE_TODO,
    newTodos,
  };
};

// todo의 상태변경을 업데이트 하는 함수
export const toggleStatusTodo = (todos, id) => {
  const updateTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isDone: !todo.isDone };
    } else {
      return todo;
    }
  });
  return {
    type: TOGGLE_STATUS_TODO,
    updateTodos,
  };
};

// 초기 상태값(state)
const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    content: "리액트 심화 강의 듣기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "TIL 작성하기",
    content: "오늘 공부한 내용에 대해 작성하기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "알고리즘 공부하기",
    content: "알고리즘 5문제 이상 풀기",
    isDone: false,
  },
];

// 리듀서 : 'state의 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.newTodo];
    case DELETE_TODO:
      return action.newTodos;
    case TOGGLE_STATUS_TODO:
      return action.updateTodos;
    default:
      return state;
  }
};

export default todos;

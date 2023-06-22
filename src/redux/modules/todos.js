import uuid from "react-uuid";

// action value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";

// action creator : action value를 return하는 함수
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

export const deleteTodo = (todos, id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  return {
    type: DELETE_TODO,
    newTodos,
  };
};

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
    title: "리액트 강의보기",
    content: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: uuid(),
    title: "점심 먹기",
    content: "점심 뭐먹지..?",
    isDone: true,
  },
  {
    id: uuid(),
    title: "마트 가기",
    content: "우유와 시리얼 사오기",
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

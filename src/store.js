import { createStore } from "redux";

//type
const ADD = "ADD";
const DELETE = "DELETE";

//action creater
const addToDo = text => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id,
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

export const actionCreater = {
  addToDo,
  deleteToDo,
};
export default store;

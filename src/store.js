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

const USERADD = "USERADD";
const USERCHECK = "USERCHECK";

//action creater
const userAdd = (userId, userPwd, userName) => {
  return {
    type: USERADD,
    userId,
    userPwd,
    userName,
  };
};

const userCheck = (userId, userPwd) => {
  return {
    type: USERCHECK,
    userId,
    userPwd,
  };
};

//reducer
const reducer = (state = { todo: [], user: [] }, action) => {
  switch (action.type) {
    case ADD:
      return {
        todo: [...state.todo, { text: action.text, id: Date.now() }],
        user: [...state.user],
      };
    case DELETE:
      return {
        todo: state.todo.filter(toDo => toDo.id !== action.id),
        user: [...state.user],
      };
    case USERADD:
      return {
        todo: [...state.todo],
        user: [
          ...state.user,
          {
            userId: action.userId,
            userPwd: action.userPwd,
            userName: action.userName,
          },
        ],
      };

    case USERCHECK:
      return state.user.map(current => {
        if (
          current.userId === action.userId &&
          current.userPwd === action.userPwd
        ) {
          console.log("로그인 성공");
        }
      });
    default:
      return state;
  }
};

// const Authreduser = (State = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case USERCHECK:
//       return [...State, { a: action.userId, b: action.userPwd }];

//     default:
//       break;
//   }
// };

//store
const store = createStore(reducer);

export const actionCreater = {
  addToDo,
  deleteToDo,
  userAdd,
  userCheck,
};
export default store;

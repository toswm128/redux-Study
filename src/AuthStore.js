import { createStore } from "redux";

//type
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
const reducer = (state = [], action) => {
  switch (action.type) {
    case USERADD:
      return [
        ...state,
        {
          userId: action.userid,
          userPwd: action.userPwd,
          userName: action.userName,
        },
      ];
    case USERCHECK:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

//store
const AuthStore = createStore(reducer);

export const actionCreater = {
  userAdd,
  userCheck,
};
export default AuthStore;

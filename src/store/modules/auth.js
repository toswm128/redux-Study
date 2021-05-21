import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const USERAUTH = "auth/USERAUTH";
const INSERTID = "auth/INSERTID";
const INSERTPW = "auth/INSERTPW";
const TOGGLE = "auth/TOGGLE";
const REMOVE = "auth/REMOVE";

export const userAuth = createAction(USERAUTH, currents => currents);
export const insertId = createAction(INSERTID, userId => userId);
export const insertPW = createAction(INSERTPW, userPW => userPW);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo 아이템에 들어갈 고유 값 입니다

const initialState = Map({
  input: "",
  auths: List(),
});

export default handleActions(
  {
    // 한줄짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록 { } 를 생략 할 수 있습니다.
    [USERAUTH]: (state, action) => state.set("input", action.payload),
    [INSERTID]: (state, { payload: userId }) => {
      // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
      const item = Map({ id: id++, checked: false, userId }); // 하나 추가 할 때마다 id 값을 증가시킵니다.
      return state.update("auths", auths => auths.push(item));
    },
    [INSERTPW]: (state, { payload: userPW }) => {
      const item = Map({ id: id++, checked: false, userPW }); // 하나 추가 할 때마다 id 값을 증가시킵니다.
      return state.update("auths", auths => auths.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
      const index = state.get("auths").findIndex(item => item.get("id") === id);
      return state.updateIn(["auths", index, "checked"], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 지웁니다.
      const index = state.get("auths").findIndex(item => item.get("id") === id);
      return state.deleteIn(["auths", index]);
    },
  },
  initialState
);

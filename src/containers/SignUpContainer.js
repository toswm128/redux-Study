import React, { useState } from "react";
import SignUp from "../components/SignUp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../store/modules/auth";

const SignUpContainer = () => {
  const [userId, setUserId] = useState("");
  const [userPW, setUserPW] = useState("");

  const handleUserId = e => {
    setUserId(e.target.value);
  };

  const handleUserPW = e => {
    setUserPW(e.target.value);
  };
  // handleChange = e => {
  //   // 인풋 값 변경
  //   const { TodoActions } = this.props;
  //   TodoActions.changeInput(e.target.value);
  // };

  // handleInsert = () => {
  //   // 아이템 추가
  //   const { input, TodoActions } = this.props;
  //   TodoActions.insert(input); // 추가하고
  //   TodoActions.changeInput(""); // 기존 인풋값 비우기
  // };

  // handleToggle = id => {
  //   // 삭제선 켜고 끄기
  //   const { TodoActions } = this.props;
  //   TodoActions.toggle(id);
  // };

  // handleRemove = id => {
  //   // 아이템 제거
  //   const { TodoActions } = this.props;
  //   TodoActions.remove(id);
  // };
  return (
    <SignUp
      userId={userId}
      userPW={userPW}
      handleUserId={handleUserId}
      handleUserPW={handleUserPW}
    />
  );
};

export default connect(
  // state 를 비구조화 할당 해주었습니다
  ({ auth }) => ({
    // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
    input: auth.get("input"),
    auths: auth.get("auths"),
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
  })
)(SignUpContainer);

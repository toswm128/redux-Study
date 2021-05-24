import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../AuthStore.js";

const SignUp = ({ userAdd }) => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <div>회원가입</div>
      <div>
        <input
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="아이디"
        />
        <input
          type="text"
          value={userPwd}
          onChange={e => setUserPwd(e.target.value)}
          placeholder="비밀번호"
        />
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder="이름"
        />
      </div>
      <div>
        <button
          onClick={() => {
            userAdd(userId, userPwd, userName);
            console.log("회원가입 성공");
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userAdd: (userId, userPwd, userName) =>
      dispatch(actionCreater.userAdd(userId, userPwd, userName)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);

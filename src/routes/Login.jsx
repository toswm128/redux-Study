import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../AuthStore";

const Login = ({ userCheck }) => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  return (
    <div>
      <div>로그인</div>
      <div>
        <input
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="아이디"
        />
      </div>
      <div>
        <input
          type="text"
          value={userPwd}
          onChange={e => setUserPwd(e.target.value)}
          placeholder="비밀번호"
        />
      </div>
      <div>
        <button onClick={() => userCheck(userId, userPwd)}>로그인</button>
      </div>
    </div>
  );
};

const mapStateToProps = State => {
  return {
    user: State.user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCheck: (userId, userPwd) =>
      dispatch(actionCreater.userCheck(userId, userPwd)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

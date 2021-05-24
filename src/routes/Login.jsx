import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../AuthStore";
import { useHistory } from "react-router-dom";

const Login = ({ user, userCheck }) => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const history = useHistory();
  console.log(user);
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
        <button
          onClick={() => {
            userCheck(userId, userPwd);
            console.log(user);
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = State => {
  return {
    user: State,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCheck: (userId, userPwd) =>
      dispatch(actionCreater.userCheck(userId, userPwd)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

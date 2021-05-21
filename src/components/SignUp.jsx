import React from "react";
import { List, Map } from "immutable";

const SignUp = ({ userId, userPW, handleUserId, handleUserPW }) => {
  return (
    <div>
      <div>회원가입</div>
      <input
        type="text"
        value={userId}
        onChange={handleUserId}
        placeholder="아이디"
      />
      <input
        type="text"
        value={userPW}
        onChange={handleUserPW}
        placeholder="비밀번호"
      />
    </div>
  );
};

export default SignUp;

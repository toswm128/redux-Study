import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>헤더</div>
      <div>
        <Link to="/">메인</Link>
      </div>
      <div>
        <Link to="/todo">투두</Link>
      </div>
      <div>
        <Link to="/sign">회원가입</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Header;

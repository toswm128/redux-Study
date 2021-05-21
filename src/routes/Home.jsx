import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>여기는 홈</div>
      <Link to="/todo">여기는 투두</Link>
    </div>
  );
};

export default Home;

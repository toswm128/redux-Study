import React, { Component } from "react";
import CounterContainer from "../containers/CounterContainer";
import AppTemplate from "./AppTemplate";
import TodosContainer from "../containers/TodosContainer";
import SignUpContainer from "../containers/SignUpContainer";

const App = () => {
  return (
    <AppTemplate counter={<CounterContainer />} todos={<SignUpContainer />} />
  );
};

export default App;

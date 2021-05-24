import React from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";

const ToDoComponent = ({ text, onBtnClick }) => {
  return (
    <li>
      <span>{text}</span>
      <span>
        <button onClick={onBtnClick}>Del</button>
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreater.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDoComponent);

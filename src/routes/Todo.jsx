import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";

const Todo = ({ toDos, addToDo }) => {
  console.log(toDos);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    console.log(text);
    addToDo(text);
    setText("");
  };
  return (
    <div className="todo">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onSubmit}>제출</button>
      <ul>
        {toDos.map(current => {
          return <div key={current.id}>{current.text} </div>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch, ownProps);
  return {
    addToDo: text => dispatch(actionCreater.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

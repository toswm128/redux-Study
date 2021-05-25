import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import ToDoConponent from "../Components/ToDoComponent";

const Todo = ({ toDos, addToDo, state }) => {
  console.log(toDos, state);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    addToDo(text);
    setText("");
  };
  return (
    <div className="todo">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onSubmit}>제출</button>
      <ul>
        {toDos.map(current => {
          return <ToDoConponent key={current.id} {...current} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { toDos: state.todo, state };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => dispatch(actionCreater.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

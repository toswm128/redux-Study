import React, { useState } from "react";
import { connect } from "react-redux";

const Todo = props => {
  console.log(props.toDos);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    console.log(text);
    setText("");
  };
  return (
    <div className="todo">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Todo);

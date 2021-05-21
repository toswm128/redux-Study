import React, { useState } from "react";

const Todo = () => {
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

export default Todo;

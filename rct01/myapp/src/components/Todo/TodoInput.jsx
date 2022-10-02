import React, { useState } from "react";
import { nanoid } from "nanoid";
const TodoInput = ({ handelTodo }) => {
  const [text, setText] = useState("");
  // const [todo, setTodo] = useState([]);
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const handeladd = () => {
    // console.log(text);
    const data = {
      id: nanoid(4),
      title: text,
      status: false,
    };
    handelTodo(data);
    setText("")
  };
  

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" value={text} onChange={(e) => handelChange(e)} />
      <button onClick={handeladd}>add</button>
      <br />
    </div>
  );
};

export default TodoInput;

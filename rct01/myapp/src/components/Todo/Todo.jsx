import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Todolist from "./Todolist";

const Todo = () => {
  const [text, setText] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handelTodo = (todo) => {
    setTodolist([...todolist, todo]);
  };
  const handelToggle = (id, title) => {
    // console.log(title)
    const updatelist = todolist.map((todo) => todo.id == id ? {...todo, status: !todo.status}:todo);
    setTodolist(updatelist);
  };
  return (
    <div>
    <button onClick={()=>{
        const updated = todolist.filter((e)=> !e.status);
        setTodolist(updated )
    }}
    >Show not Done</button>
      <TodoInput handelTodo={handelTodo} />
      <Todolist list={todolist} handelToggle={handelToggle} />
    </div>
  );
};

export default Todo;

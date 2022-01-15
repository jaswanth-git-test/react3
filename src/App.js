import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css";
function App() {
  const getTodos = () => {
    let list = JSON.parse(localStorage.getItem("list"));
    let gotList = list ? list : [];
    return gotList;
  };
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(getTodos());
  const changeHandler = (e) => setTask(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <div className="container main">
        <div className="row">
          <h3 className="col text-center">Todo List</h3>
        </div>
        <div className="container">
          <form onSubmit={submitHandler} className="row">
            <input
              className="col-10 inputField"
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
              required
              autoComplete="off"
            />

            <input
              type="submit"
              className=" col-2 btn btn-primary"
              name="Add"
              value="Add"
            />
          </form>
        </div>

        <div className="row">
          <List todos={todos} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;


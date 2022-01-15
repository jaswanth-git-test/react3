import React from "react";
import "./App.css";

function List({ todos, deleteHandler }) {
  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <div className="container todoCard">
            <div className="row " key={index}>
              <div className="col-10 text-center">
                <h5>{todo}</h5>
              </div>
              <div className="col-2">
                <button
                  className="  btn btn-danger danger   "
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

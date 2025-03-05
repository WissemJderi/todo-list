import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState();
  function addTask() {
    setTodo((prevArr) => [...prevArr, currentTask]);
  }

  function deleteTask(i) {
    if (todo.length > 1) {
      if (i == 0) {
        setTodo(todo.slice(1));
      } else {
        setTodo(todo.splice(i));
      }
    } else {
      setTodo([]);
    }
  }

  function editTask(i) {
    let taskEdited = prompt("You Can Edit this Task", todo[i]);
    if (taskEdited !== null) {
      setTodo((prevTodo) =>
        prevTodo.map((task, index) => (index === i ? taskEdited : task))
      );
    }
  }
  const todos = todo.map((task, i) => {
    return (
      <div className="task" key={(task, Math.random() * 10)}>
        <p>{task}</p>
        <div className="btns">
          <button
            onClick={() => {
              deleteTask(i);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              editTask(i);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1>TODO App </h1>
      <hr />
      <input
        placeholder="Add Item..."
        onChange={(e) => {
          setCurrentTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button
        className="add"
        onClick={(e) => {
          addTask(e);
        }}
      >
        Add
      </button>
      {todo.length > 0 ? (
        todos
      ) : (
        <h2>You don't have any tasks at the moment.</h2>
      )}
    </>
  );
}

export default App;

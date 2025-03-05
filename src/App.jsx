import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState();
  function addTask() {
    setTodo((prevArr) => [...prevArr, currentTask]);
  }
  const todos = todo.map((task) => {
    return (
      <div className="task" key={(task, Math.random() * 10)}>
        <p>{task}</p>
        <button>Delete</button>
        <button>Edit</button>
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
      />
      <button
        className="add"
        onClick={() => {
          addTask();
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

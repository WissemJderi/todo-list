import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(["Read Quran", "Read Hadiths"]);

  const todos = todo.map((task) => {
    return (
      <div className="task">
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
      <input placeholder="Add Item..." />
      <button className="add">Add</button>
      {todo.length > 1 ? todos : <h4>You Have No Task </h4>}
    </>
  );
}

export default App;

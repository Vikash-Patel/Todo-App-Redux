import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo"
import List from "./components/List"

function App() {
  return (
    <div className="App">
      <h1>todo app</h1>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;

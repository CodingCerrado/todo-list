import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";
import CreateToDo from "./components/CreateToDo/CreateToDo";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <CreateToDo />
    </div>
  );
}

export default App;

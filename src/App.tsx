import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";
import CreateToDo from "./components/CreateToDo/CreateToDo";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div>
      <CreateToDo />
    </div>
  );
}

export default App;

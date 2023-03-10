import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [items, setItems] = useState<(string | null)[]>([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);

  function addToDoItem() {
    setItems([...items, null]);

    function handleClick() {
      //TO DO
    }
  }

  return (
    <div className="app">
      <div>Header</div>
      <div>Content</div>

      <div>
        {items.map((item: string | null) => (
          <Todo key={item ?? "null"} id={item ?? "null"} />
        ))}
        <CreateToDo onAdd={addToDoItem} />
      </div>
    </div>
  );
}

export default App;

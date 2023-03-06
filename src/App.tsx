import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";
import CreateToDo from "./components/CreateToDo/CreateToDo";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleClick = () => {
    // TODO
  };

  return (
    <div className="app">
      <div>Header</div>
      <div>Content</div>

      <div>
        {items.map((item: string) => (
          <Todo key={item} id={item} />
        ))}
        <CreateToDo />
      </div>
    </div>
  );
}

export default App;

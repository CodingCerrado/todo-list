import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleClick = () => {
    // TODO
  };

  const handleRemoveTodo = (id: string) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div className="app">
      <div>Header</div>
      <div>Content</div>
      <div>
        {items.map((item: string) => (
          <Todo key={item} id={item} onDelete={() => handleRemoveTodo(item)} />
        ))}

        <button type="button" onClick={handleClick}>
          Add todo item
        </button>
      </div>
    </div>
  );
}

export default App;

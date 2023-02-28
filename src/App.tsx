import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleClick = () => {
    // TODO
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: string) => (
          <Todo key={item} id={item} />
        ))}

        <button type="button" onClick={handleClick}>
          Add todo item
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [items, setItems] = useState(["First Item"]);

  useEffect(() => {
    const meuLocalStorage = localStorage.getItem("items");
    if (meuLocalStorage !== null) {
      setItems(JSON.parse(meuLocalStorage));
    }
  }, []);

  const handleClick = () => {
    // TODO
    setItems([...items, 'Novo Item']);
    localStorage.setItem("items", JSON.stringify([...items, 'Novo Item']));
  };

  const handleRemoveTodo = (id: string) => {
    setItems(items.filter((item) => item !== id));
    // TODO: delete from local storage as well
  };

  return (
    <div className="app">
      <Header />
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

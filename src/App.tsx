import { useState, useEffect } from "react";
import { json } from "stream/consumers";
import "./App.scss";
// import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

function App() {
  const [items, setItems] = useState([
    { item: "Item 1", id: "1", isChecked: false },
    { item: "Item 2", id: "2", isChecked: false },
    { item: "Item 3", id: "3", isChecked: false },
  ]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    //const userStorage = localStorage.getItem("items");
    //console.log(userStorage);
  }, [items]);

  const handleClick = () => {
    // TODO
  };

  return (
    <div className="app">
      {/* <Header /> */}
      <div>Content</div>
      <div>
        {items.map((item) => (
          <Todo key={item.id} id={item.id} isChecked={item.isChecked} />
        ))}

        <button type="button" onClick={handleClick}>
          Add todo item
        </button>
      </div>
    </div>
  );
}

export default App;

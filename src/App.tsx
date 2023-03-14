import { useState, useEffect } from "react";
import "./App.scss";
// import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  //["Item 1"...] //id, isChecked
  //isChecked
  //tirar useEffects do todo
  //userData fora da função
  //apenas primeiro useEffect

  useEffect(() => {
    // console.log("items", items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const userData = localStorage.getItem("items");
    //console.log("userData", userData);
    if (userData !== null) {
      setItems(JSON.parse(userData));
    } // it's not setting the item
  }, []);

  // [] hook just when building the component

  // [items] it will be hooked everytime the "items" are updated

  const handleClick = () => {
    // TODO
  };

  return (
    <div className="app">
      {/* <Header /> */}
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

import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
import CreateToDo from "./components/CreateToDo";

const App = () => {
  const [items, setItems] = useState<(string | null)[]>([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);

  const [hasNull, setHasNull] = useState(false);

  const addToDoItem = () => {
    setItems([...items, null]);
  };

  const disableAddTask = () => {
    if (items[items.length - 1] === null) {
      setHasNull(true);
    }
  };

  return (
    <div className="app">
      <div>Header</div>
      <div>Content</div>

      <div>
        {items.map((item: string | null, index) => (
          <Todo key={item} id={index.toString()} />
        ))}
        <CreateToDo onAdd={addToDoItem} stopAdd={disableAddTask} />
      </div>
    </div>
  );
};

export default App;

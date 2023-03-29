import { useEffect, useState } from "react";
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

  const handleCreateToDo = () => {
    setItems([...items, null]);
  };

  useEffect(() => {
    setHasNull(items.includes(null));
  }, [items]);

  return (
    <div className="app">
      <div>Header</div>
      <div>Content</div>

      <div>
        {items.map((item: string | null, index) => (
          <Todo key={item} id={index.toString()} />
        ))}
        <CreateToDo onAdd={handleCreateToDo} hasNull={hasNull} />
      </div>
    </div>
  );
};

export default App;

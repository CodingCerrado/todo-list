import { useEffect, useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

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

  const handleRemoveTodo = (id: string | null) => {
    setItems(items.filter((item) => item !== id && item !== null));
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: string | null, index) => (
          <Todo
            key={item}
            id={item}
            todoId={index.toString()}
            onDelete={() => handleRemoveTodo(item)}
          />
        ))}

        <div>
          <CreateToDo onAdd={handleCreateToDo} hasNull={hasNull} />
        </div>
      </div>
    </div>
  );
};

export default App;

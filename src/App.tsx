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
    console.log("Updated items:", items);
    setHasNull(items.includes(null));
  }, [items]);

  const handleUpdateTodo = (id: string | null, newText: string | null) => {
    const updatedItems = items.map((item) => {
      if (item === id) {
        return newText;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

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
            onUpdate={(newText: string | null) => handleUpdateTodo(item, newText)}
            itemText={item}
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

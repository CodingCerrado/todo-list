import { useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
  const [items, setItems] = useState<(string)[]>([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);

  const handleCreateToDo = () => {
    setItems([...items, '']);
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    const updatedItems = items.map((item) => {
      if (item === id) {
        return newText;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleRemoveTodo = (id: string) => {
    setItems(items.filter((item) => item !== id && item !== null));
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: string, index) => (
          <Todo
            key={item}
            id={item}
            todoId={index.toString()}
            onDelete={() => handleRemoveTodo(item)}
            onUpdate={(newText: string) =>
              handleUpdateTodo(item, newText)
            }
            itemText={item}
          />
        ))}

        <div>
          <CreateToDo onAdd={handleCreateToDo} hasNull={items.includes('')} />
        </div>
      </div>
    </div>
  );
};

export default App;

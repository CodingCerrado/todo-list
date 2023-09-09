import { useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

interface TodoItem {
  content: string;
  isChecked: boolean;
  isEmpty: boolean;
  isUpdating: boolean;
}

const App = () => {
  const [items, setItems] = useState<TodoItem[]>([
    { content: "Item 1", isChecked: false, isEmpty: false, isUpdating: false },
    { content: "Item 2", isChecked: false, isEmpty: false, isUpdating: false },
    { content: "Item 3", isChecked: false, isEmpty: false, isUpdating: false },
  ]);

  console.log(items);

  const handleCreateToDo = () => {
    setItems([
      ...items,
      {
        content: "",
        isChecked: false,
        isEmpty: true,
        isUpdating: false,
      },
    ]);
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    const updatedItems = items.map((item) => {
      if (item.content === id) {
        return { ...item, content: newText };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleRemoveTodo = (id: string) => {
    setItems(items.filter((item) => item.content !== id));
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: TodoItem, index) => (
          <Todo
            key={index}
            todoId={item.content}
            itemText={item.content}
            onDelete={() => handleRemoveTodo(item.content)}
            onUpdate={(newText: string) =>
              handleUpdateTodo(item.content, newText)
            }
            onKeyDown={(newText: string) =>
              handleUpdateTodo(item.content, newText)
            }
            onUpdateEmptyStatus={(status: boolean) => {
              const updatedItems = [...items];
              updatedItems[index].isEmpty = status;
              setItems(updatedItems);
            }}
            onAdd={handleCreateToDo}
          />
        ))}

        <div>
          <CreateToDo
            onAdd={handleCreateToDo}
            hasEmptyString={items.some((item) => item.isEmpty)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

interface TodoItem {
  id: number;
  content: string;
  isChecked: boolean;
  isEmpty: boolean;
  isUpdating: boolean;
}

const App = () => {
  const [items, setItems] = useState<TodoItem[]>([
    { id: 1, content: "Item 1", isChecked: false, isEmpty: false, isUpdating: false },
    { id: 2, content: "Item 2", isChecked: false, isEmpty: false, isUpdating: false },
    { id: 3, content: "Item 3", isChecked: false, isEmpty: false, isUpdating: false },
  ]);

  const [nextId, setNextId] = useState<number>(4);

  console.log(items);

  const handleCreateToDo = () => {
    setItems([
      ...items,
      {
        id: nextId,
        content: "",
        isChecked: false,
        isEmpty: true,
        isUpdating: false,
      },
    ]);
    setNextId(nextId + 1);
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

  const handleRemoveTodo = (idToRemove: number) => {
    setItems(items.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: TodoItem, index) => (
          <Todo
            key={item.id}
            todoId={item.id}
            itemText={item.content}
            onDelete={() => handleRemoveTodo(item.id)}
            onUpdate={(newText: string) =>
              handleUpdateTodo(item.content, newText)
            }
            onKeyDown={(newText: string) =>
              handleUpdateTodo(item.content, newText)
            }
            onUpdateEmptyStatus={(status: boolean) => {
              const updatedItems = [...items];
              const index = updatedItems.findIndex((i) => i.id === item.id);
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

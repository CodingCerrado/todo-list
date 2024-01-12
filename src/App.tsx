import { useState, useEffect } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { stringify } from "querystring";

interface itemsTypes {
  todoId: number;
  content: string;
  isChecked: boolean; //not working yet
  isEmpty: boolean;
}

const initialItems = [
  {
    todoId: 1,
    content: "Item 1",
    isChecked: false,
    isEmpty: false,
  },
  {
    todoId: 2,
    content: "Item 2",
    isChecked: false,
    isEmpty: false,
  },
  {
    todoId: 3,
    content: "Item 3",
    isChecked: false,
    isEmpty: false,
  },
];

const App = () => {
  const [items, setItems] = useState<itemsTypes[]>(initialItems || []);

  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem("items");
    const jsonData = JSON.parse(itemsFromLocalStorage || "");

    if (itemsFromLocalStorage) {
      setItems(jsonData);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("items", JSON.stringify(items));
    }, 2000);
  }, [items]);

  const getHighestId = () => {
    const itemsId = items.map((item) => item.todoId);
    return itemsId.length ? Math.max(...itemsId) + 1 : 1;
  };

  const handleCreateToDo = () => {
    setItems([
      ...items,
      {
        todoId: getHighestId(),
        content: "",
        isChecked: false,
        isEmpty: true,
      },
    ]);
  };

  const handleUpdateTodo = (todoId: number, newText: string) => {
    const updatedItems = items.map((item) => {
      if (item.todoId === todoId) {
        return {
          ...item,
          content: newText,
          isEmpty: newText === "" ? true : false,
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleRemoveTodo = (todoIdToRemove: number) => {
    setItems(items.filter((item) => item.todoId !== todoIdToRemove));
  };

  return (
    <div className="app">
      <Header />
      <div>Content</div>
      <div>
        {items.map((item: itemsTypes, index) => (
          <Todo
            key={item.todoId}
            todoId={item.todoId}
            onDelete={() => handleRemoveTodo(item.todoId)}
            onUpdate={(newText: string) =>
              handleUpdateTodo(item.todoId, newText)
            }
            itemText={item.content}
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

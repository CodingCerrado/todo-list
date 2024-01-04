import { useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

interface itemsTypes {
  todoId: number;
  content: string;
  isChecked: boolean;
  isEmpty: boolean;
  isUpdating: boolean;
}

const App = () => {
  const [items, setItems] = useState<itemsTypes[]>([
    {
      todoId: 1,
      content: "Item 1",
      isChecked: false,
      isEmpty: false,
      isUpdating: false,
    },
    {
      todoId: 2,
      content: "Item 2",
      isChecked: false,
      isEmpty: false,
      isUpdating: false,
    },
    {
      todoId: 3,
      content: "Item 3",
      isChecked: false,
      isEmpty: false,
      isUpdating: false,
    },
  ]);

  const getNewId = () => {
    const itemsId = items.map((item) => item.todoId);
    return Math.max(...itemsId) + 1;
  };

  console.log(items);

  const handleCreateToDo = () => {
    setItems([
      ...items,
      {
        todoId: getNewId(),
        content: "",
        isChecked: false,
        isEmpty: true,
        isUpdating: false,
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
            onPressEnter={(newText: string) =>
              handleUpdateTodo(item.todoId, newText)
            }
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

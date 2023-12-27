import { useState } from "react";
import "./App.scss";
import CreateToDo from "./components/CreateToDo";
import Header from "./components/Header";
import Todo from "./components/Todo";

interface TodoItem {
  todoId: number;
  content: string;
  isChecked: boolean;
  isEmpty: boolean;
  isUpdating: boolean;
}

const App = () => {
  const [items, setItems] = useState<TodoItem[]>([
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


//  Vamos usar a variável isUpdating no projeto? Ou podemos remover?

  const [nextTodoId, setNextTodoId] = useState<number>(4);

  console.log(items);

  const handleCreateToDo = () => {
    setItems([
      ...items,
      {
        todoId: nextTodoId,
        content: "",
        isChecked: false,
        isEmpty: true,
        isUpdating: false,
      },
    ]);
    setNextTodoId(nextTodoId + 1);
  };

const handleUpdateTodo = (todoId: number, newText: string) => {
  const updatedItems = items.map((item) => {
    if (item.todoId === todoId) {
      return { ...item, content: newText, isUpdating: true };
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
        {items.map((item: TodoItem, index) => (
          <Todo
            key={item.todoId}
            todoId={item.todoId}
            itemText={item.content}
            onDelete={() => handleRemoveTodo(item.todoId)}
            onUpdate={(newText: string) =>
              handleUpdateTodo(item.todoId, newText)
            }
            onKeyDown={(newText: string) =>
              handleUpdateTodo(item.todoId, newText)
            }
            onUpdateEmptyStatus={(status: boolean) => {
              const updatedItems = [...items];
              const index = updatedItems.findIndex((i) => i.todoId === item.todoId);
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

import React from "react";

const AddTodo = () => {
  const [listaDeTodos, setListaDeTodos] = React.useState<(string | null)[]>([
    "Todo1",
    "Todo2",
  ]);

  let temNull = false;

  if (listaDeTodos.includes(null)) {
    temNull = true;
  }

  const mudarLista = () => {
    setListaDeTodos([...listaDeTodos, null]);
  };


  return (
    <div>
      <div>
        {listaDeTodos.map((todo) => (
          <div>{todo}</div>
        ))}
      </div>
      {temNull && (<div>Voce Adicionou um novo Todo</div>)}
      <button onClick={mudarLista} disabled={temNull}>
        Create a new task
      </button>
    </div>
  );
};

export default AddTodo;

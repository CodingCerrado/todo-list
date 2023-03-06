import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

function CreateToDo() {
  const [plus, setPlus] = useState<(string | null)[]>(["Todo1", "Todo2"]);
  const [isHovered, setIsHovered] = useState(false);

  let temNull = false;

  if (plus.includes(null)) {
    temNull = true;
  }

  const mudarLista = () => {
    setPlus([...plus, "add novo to", null]);
  };

  function getBackGroundColor() {
    if (isHovered) {
      return plus ? "#fbe5d2" : "#f0f1f3";
    } else {
      return "white";
    }
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div>
      {temNull && <div>Voce Adicionou um novo Todo</div>}
      <button
        className="plustodo"
        onClick={mudarLista}
        disabled={temNull}
        style={{
          backgroundColor: getBackGroundColor(),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BiPlusCircle className="plusbutton" />
        <span className="namebutton">Create a new task</span>
      </button>
    </div>
  );
}

export default CreateToDo;

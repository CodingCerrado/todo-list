import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

function CreateToDo({ onAdd }: { onAdd: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  let temNull = false;

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div>
      {temNull && <div>You added a new todo!</div>}
      <button
        className="plustodo"
        onClick={onAdd}
        disabled={temNull}
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

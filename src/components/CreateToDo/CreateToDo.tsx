import React, { useState } from "react";
import "./CreateToDo";
import { BiPlusCircle } from "react-icons/bi";

function CreateToDo() {
  const [plus, setPlus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  function handleChange() {
    setPlus(!plus);
  }

  return (
    <div>
      <h1 className="title"> ToDo List</h1>
      <div
        style={{
          backgroundColor: getBackGroundColor(),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <button className="plustodo">
            <BiPlusCircle />
            Create a new task
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateToDo;

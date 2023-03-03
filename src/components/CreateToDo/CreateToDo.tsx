import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
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
    <div
      className="title"
      style={{
        backgroundColor: getBackGroundColor(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1> ToDo List</h1>
      <div>
        <button className="plustodo">
          {" "}
          <BiPlusCircle />
          Create a new task
        </button>
      </div>
    </div>
  );
}

export default CreateToDo;

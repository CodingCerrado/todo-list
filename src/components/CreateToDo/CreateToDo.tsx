import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

const CreateToDo = ({
  onAdd,
  hasNull,
}: {
  onAdd: () => void;
  hasNull: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBackGroundColor = () => {
    if (isHovered) {
      return isHovered ? "#fbe5d2" : "#f0f1f3";
    } else {
      return "white";
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: getBackGroundColor(),
        }}
        className="plus-todo"
        onClick={onAdd}
        disabled={hasNull}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BiPlusCircle className="plus-button" />
        <span>Create a new task</span>
      </button>
    </div>
  );
};

export default CreateToDo;

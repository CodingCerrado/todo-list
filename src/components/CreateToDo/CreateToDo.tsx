import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

const CreateToDo = ({
  onAdd,
  stopAdd,
}: {
  onAdd: () => void;
  stopAdd: () => any;
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
      {/* {hasNull ? (
        <div>You added a new task</div>
      ) : (
        <button disabled={true}>Disabled Button</button>
      )} */}
      <button
        style={{
          backgroundColor: getBackGroundColor(),
        }}
        className="plus-todo"
        onClick={onAdd}
        disabled={stopAdd()}
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

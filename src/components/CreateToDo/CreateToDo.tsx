import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

const CreateToDo = ({
  onAdd,
  disableButton,
  hasNull,
}: {
  onAdd: () => void;
  disableButton: () => void;
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
  const handleClick = () => {
    if (hasNull) {
      onAdd();
    } else {
      disableButton();
    }
  };

  return (
    <div>
      {hasNull ? (
        <div>You added a new task</div>
      ) : (
        <button disabled={true}>Disabled Button</button>
      )}
      <button
        style={{
          backgroundColor: getBackGroundColor(),
        }}
        className="plus-todo"
        onClick={handleClick}
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

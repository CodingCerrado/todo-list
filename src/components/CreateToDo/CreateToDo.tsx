import React, { useState } from "react";
import "./CreateToDo";
import "./CreateToDo.scss";
import { BiPlusCircle } from "react-icons/bi";

const CreateToDo = ({
  onAdd,
  hasEmptyString,
}: {
  onAdd: () => void;
  hasEmptyString: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // isHovered was not used and does not have a working logic yet !!!

  return (
    <div>
      <button
        className="plus-todo"
        onClick={onAdd}
        disabled={hasEmptyString}
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

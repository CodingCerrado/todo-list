import { useState } from "react";
import "./Todo.scss";

import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({ id }: { id: string }) => {
  const [state, setState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getBackGroundColor = () => {
    if (isHovered) {
      return state ? "#fbe5d2" : "#f0f1f3";
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

  const handleChange = () => {
    setState(!state);
  };

  return (
    <div
      className="todo"
      style={{
        backgroundColor: getBackGroundColor(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          className="round"
          name={id}
          checked={state}
          onChange={handleChange}
        />
        <div className="content">
          <span>Checkbox Label</span>

          {true && (
            <button>
              <RiDeleteBin5Line />
            </button>
          )}
        </div>
      </label>
    </div>
  );
};

export default Todo;

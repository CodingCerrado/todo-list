import { useState } from "react";
import "./Todo.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({
  id,
  onDelete,
  todoId,
}: {
  id: string | null;
  todoId: string;
  onDelete: () => void;
}) => {
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
        marginBottom:10
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={todoId}>
        <input
          type="checkbox"
          id={todoId}
          className="round"
          name={todoId}
          checked={state}
          onChange={handleChange}
        />
        <div className="content">
          <span>Checkbox Label</span>

          {isHovered && (
            <button onClick={onDelete}>
              <RiDeleteBin5Line />
            </button>
          )}
        </div>
      </label>
    </div>
  );
};

export default Todo;

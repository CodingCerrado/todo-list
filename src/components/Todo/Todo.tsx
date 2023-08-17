import { useState } from "react";
import "./Todo.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({
  id,
  onDelete,
  todoId,
  onUpdate,
  itemText,
}: {
  id: string;
  todoId: string;
  onDelete: () => void;
  itemText: string;
  onUpdate: (newText: string) => void;
}) => {
  const [state, setState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState(itemText);

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

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    onUpdate(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onUpdate(event.currentTarget.value);
    }
  };

  return (
    <div
      className="todo"
      style={{
        backgroundColor: getBackGroundColor(),
        marginBottom: 10,
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
          <input
            className="content-input"
            style={{
              backgroundColor: getBackGroundColor(),
            }}
            type="text"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            autoFocus={true}
          />

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

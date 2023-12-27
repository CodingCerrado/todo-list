import { useState } from "react";
import "./Todo.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({
  onDelete,
  todoId,
  onUpdate,
  itemText,
  onPressEnter,
  onAdd,
  hasEmptyString,
}: {
  todoId: number;
  onDelete: () => void;
  itemText: string;
  onUpdate: (newText: string) => void;
  onPressEnter: (newText: string) => void;
  onAdd: () => void;
  hasEmptyString: boolean;
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
    const newValue = event.target.value;
    setText(newValue);
    onUpdate(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      event.currentTarget.value !== "" &&
      !hasEmptyString
    ) {
      event.currentTarget.blur();
      onAdd();
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
      <label htmlFor={String(todoId)}>
        <input
          type="checkbox"
          id={String(todoId)}
          className="round"
          name={String(todoId)}
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

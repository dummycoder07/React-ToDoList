import { useState } from "react";

const TodoInput = (props) => {
  const [inputVal, setInputVal] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      props.addItem(inputVal);
      setInputVal("");
    }
  };
  const onChangeVal = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="text-area"
        placeholder="Enter a Todo"
        value={inputVal}
        onChange={onChangeVal}
        onKeyDown={handleEnter}
      />
      <button
        className="add-icon"
        onClick={() => {
          props.addItem(inputVal);
          setInputVal("");
        }}
      >
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  );
};

export default TodoInput;

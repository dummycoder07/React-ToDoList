import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const addItem = (newItem) => {
    if (newItem !== "") setList([...list, newItem]);
  };

  const removeItem = (key) => {
    let newList = [...list];
    newList.splice(key, 1);
    setList([...newList]);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <TodoInput addItem={addItem} />
        {list.map((item, i) => {
          return (
            <TodoItem key={i} index={i} item={item} deleteItem={removeItem} />
          );
        })}
      </div>
    </div>
  );
};

export default App;

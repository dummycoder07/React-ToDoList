const TodoItem = (props) => {
  return (
    <li className="todoItem-container">
      {props.item}
      <span className="icon">
        <i
          className="fa-solid fa-trash"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        />
      </span>
    </li>
  );
};

export default TodoItem;

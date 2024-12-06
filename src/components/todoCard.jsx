import React from "react";

export default function TodoCard(props) {
  const { children, delteTodo, index, handelEditTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handelEditTodo(index)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => delteTodo(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

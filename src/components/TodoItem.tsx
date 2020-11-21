import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Todo } from "../models/todo";
import "./todo_item.less";

export const TodoItem: React.FC<{
  item: Todo;
  onClick: () => void;
}> = ({ item, onClick }) => {
  return (
    <div onClick={onClick} className="todo-item">
      <FontAwesomeIcon className="icon" icon={item.complete ? faCheckCircle : faCircle} />
      {item.name}
    </div>
  );
};

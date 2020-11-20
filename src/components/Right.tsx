import React from "react";
import classNames from "classnames";
import { TodoList } from "./TodoList";

export const Right: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames("comp-right", className)}>
      <TodoList />
    </div>
  );
};

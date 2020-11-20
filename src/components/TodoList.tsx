import { connect } from "dva";
import React from "react";
import { Category } from "../models/category";
import { Todo } from "../models/todo";
import { AddItem } from "./AddItem";
import "./todo_list.less";

export const TodoList = connect(
  ({ todos, category, currentCategory }: any) => ({
    todos,
    category,
    currentCategory,
  })
)(function (props: {
  todos: Todo[];
  category: Category[];
  currentCategory: number;
  dispatch: any;
}) {
  return (
    <div className="todo-list">
      <div className="category">
        {props.category.filter((c) => c.id === props.currentCategory)[0].name}
      </div>
      <div className="todos">
        <AddItem text="添加任务" />
      </div>
    </div>
  );
});

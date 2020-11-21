import { faList } from "@fortawesome/free-solid-svg-icons";
import { connect } from "dva";
import React from "react";
import { Category } from "./../models/category";
import { AddItem } from "./AddItem";
import { IconMenu } from "./IconMenu";

export const CategoryList = connect(({ category, currentCategory }: any) => ({
  category,
  currentCategory,
}))(function (props: {
  category: Category[];
  currentCategory: number;
  dispatch: any;
}) {
  return (
    <>
      {props.category.map((cat) => (
        <IconMenu
          key={cat.id}
          text={cat.name}
          icon={faList}
          selected={cat.id === props.currentCategory}
          onClick={() =>
            props.dispatch({
              type: "currentCategory/put",
              payload: cat.id,
            })
          }
        />
      ))}
      <AddItem
        text="新建分类"
        onConfirm={(name) => {
          if (name) {
            props.dispatch({
              type: "category/put",
              payload: name,
            });
          }
        }}
      />
    </>
  );
});

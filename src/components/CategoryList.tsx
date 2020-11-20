import { faList } from "@fortawesome/free-solid-svg-icons";
import { connect } from "dva";
import React from "react";
import { Category } from "./../models/category";
import { AddItem } from "./AddItem";
import { IconMenu } from "./IconMenu";

export const CategoryList = connect(
  ({ category }: { category: Category[] }) => ({
    category,
  })
)(function ({ category, dispatch }: { category: Category[]; dispatch: any }) {
  return (
    <>
      {category.map((cat) => (
        <IconMenu text={cat.name} icon={faList} />
      ))}
      <AddItem
        text="新建分类"
        onConfirm={(name) => {
          if (name) {
            dispatch({
              type: "category/put",
              payload: name,
            });
          }
        }}
      />
    </>
  );
});

import { Model } from "dva";

let nextId = 0;

export interface Category {
  id: number;
  name: string;
}

export default {
  namespace: "category",
  state: [
    { id: nextId++, name: "默认分类" },
    { id: nextId++, name: "分类 2" },
  ] as Category[],
  reducers: {
    put(state, { payload: name }) {
      return [...state, { id: nextId++, name }];
    },
  },
} as Model;

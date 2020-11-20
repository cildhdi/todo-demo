import { Model } from "dva";

let nextId = 0;

export interface Todo {
  id: number;
  categoryId: number;
  name: string;
  complete: boolean;
}

export default {
  namespace: "todo",
  state: [] as Todo[],
  reducers: {
    put(state, { payload: { name, categoryId } }) {
      return [...state, { id: nextId++, name, categoryId } as Todo];
    },
    toogle(state: Todo[], { payload: id }) {
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    },
  },
} as Model;

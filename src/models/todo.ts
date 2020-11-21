import { Model } from "dva";

let nextId = 0;

export interface Todo {
  id: number;
  categoryId: number;
  name: string;
  complete: boolean;
}

export default {
  namespace: "todos",
  state: [
    { name: "Todo item 1", id: nextId++, categoryId: 0, complete: false },
    { name: "Todo item 2", id: nextId++, categoryId: 0, complete: false },
    { name: "Todo item 3", id: nextId++, categoryId: 0, complete: false },
    { name: "Todo item 4", id: nextId++, categoryId: 0, complete: false },
  ] as Todo[],
  reducers: {
    put(state, { payload: { name, categoryId } }) {
      return [{ id: nextId++, name, categoryId } as Todo, ...state];
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

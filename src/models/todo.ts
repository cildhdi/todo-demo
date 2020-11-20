import { Model } from "dva";

let nextId = 0;

interface Todo {
  id: number;
  name: string;
  complete: boolean;
}

export default {
  namespace: "todo",
  state: [] as Todo[],
  reducers: {
    put(state, { payload: name }) {
      return [...state, { id: nextId++, name }];
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

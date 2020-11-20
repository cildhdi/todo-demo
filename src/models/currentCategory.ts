import { Model } from "dva";

export default {
  namespace: "currentCategory",
  state: 0,
  reducers: {
    put(state, { payload: id }) {
      return id;
    },
  },
} as Model;

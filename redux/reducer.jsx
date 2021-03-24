import { PLUS, MINUS } from "./tipe";

const initData = {
  counter: 0,
};

export const reducerCounter = (state = initData, action) => {
  switch (action.type) {
    case PLUS:
      console.log("PLUS COUNTER");
      return { ...state, counter: action.data + 1 };
    case MINUS:
      console.log("MINUS COUNTER");
      return { ...state, counter: action.data - 1 };
    default:
      return state;
  }
};

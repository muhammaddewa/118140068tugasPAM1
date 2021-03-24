import { PLUS, MINUS } from "./tipe";

export const plusCounter = (counter) => ({
  type: PLUS,
  data: counter,
});

export const minusCounter = (counter) => ({
  type: MINUS,
  data: counter,
});

import React from "react";
import Counter from "./counter";

import { Provider } from "react-redux";
import storeState from "./redux/store";

export default function App() {
  return (
    <Provider store={storeState}>
      <Counter />
    </Provider>
  );
}

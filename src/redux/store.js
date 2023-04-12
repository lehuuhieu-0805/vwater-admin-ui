import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";
import counterReducer from "./counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

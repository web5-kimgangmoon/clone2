import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import window_widthReducer from "./windowH";

export default configureStore({
  reducer: { counter: counterReducer, breakpoint: window_widthReducer },
});

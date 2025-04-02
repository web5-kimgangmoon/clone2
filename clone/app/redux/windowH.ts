import { createSlice } from "@reduxjs/toolkit";

export const windowH = createSlice({
  name: "windowH",
  initialState: {
    breakpoint: "undefined",
  },
  reducers: {
    setWindowH: (state, action) => {
      state.breakpoint = "xs";
      if (action.payload > 480) state.breakpoint = "sm";
      if (action.payload > 720) state.breakpoint = "md";
      if (action.payload > 1024) state.breakpoint = "lg";
      if (action.payload > 1280) state.breakpoint = "xl";
      if (action.payload > 1720) state.breakpoint = "2xl";
    },
  },
});

export const { setWindowH } = windowH.actions;

export default windowH.reducer;

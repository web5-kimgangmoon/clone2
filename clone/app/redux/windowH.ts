import { createSlice } from "@reduxjs/toolkit";

export const windowH = createSlice({
  name: "windowH",
  initialState: {
    breakpoint: "undefined",
  },
  reducers: {
    setWindowH: (state, action) => {
      state.breakpoint = "xxs";
      if (action.payload > 479) state.breakpoint = "xs";
      if (action.payload > 719) state.breakpoint = "sm";
      if (action.payload > 1023) state.breakpoint = "md";
      if (action.payload > 1279) state.breakpoint = "lg";
      if (action.payload > 1719) state.breakpoint = "xl";
      if (action.payload > 1959) state.breakpoint = "2xl";
    },
  },
});

export const { setWindowH } = windowH.actions;

export default windowH.reducer;

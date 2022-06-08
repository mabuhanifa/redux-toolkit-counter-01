import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    add5: (state) => {
        state.count += 5;
        },
    sub5: (state) => {
        state.count -= 5;
    },
    byAmount:( state, action)=>{
        state.count +=  action.payload;
    }
  },
});

export const { increment, decrement, reset, add5 ,sub5,byAmount } = counterSlice.actions;

export default counterSlice.reducer;
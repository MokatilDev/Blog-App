import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  isAuth: boolean;
}

const initailState: CounterState = {
  isAuth: false,
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    onAuthUser: (state) => {
        state.isAuth = true
    }
  },
  initialState: initailState,
});

export const { onAuthUser } = counterSlice.actions;
export default counterSlice.reducer;

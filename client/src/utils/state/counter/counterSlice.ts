import { createSlice } from "@reduxjs/toolkit";


export interface CounterState {
    count: number
}

const initialState : CounterState = {
    count: 0
}

const counterSlice  = createSlice({
    name: "counter",
    reducers: {
        incerement: (state) => {
            state.count += 1
        },
        deecremeent: (state) => {
            state.count -= 1
        }
    },
    initialState: initialState
})

export const {incerement,deecremeent} = counterSlice.actions
export default counterSlice.reducer
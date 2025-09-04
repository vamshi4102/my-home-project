import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

const workerSlice = createSlice({
    name:'workers',
    initialState,
    reducers:{
        setWorkers:(state,action) => {
            state.items(action.payload);
        }
    }
});

export const {setWorkers} = workerSlice.actions;
export default workerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        address: (state, action) => {
            state.value = action.payload;
        },
    },
    
})

// Action creators are generated for each case reducer function
export const { address } = addressSlice.actions;

export default addressSlice.reducer;

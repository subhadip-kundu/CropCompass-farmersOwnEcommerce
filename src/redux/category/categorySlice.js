import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "Wheat",
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        category: (state, action) => {
            state.value = action.payload;
        },
    },
    
})

// Action creators are generated for each case reducer function
export const { category } = categorySlice.actions

export default categorySlice.reducer

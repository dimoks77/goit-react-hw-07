import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        name: ""
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;
// export const setSearchFilter = (value) => changeFilter(value);
export const filterReducer = filterSlice.reducer;
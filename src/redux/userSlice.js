import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action) {
            return (state = action.payload);
        },
        removeUser(state, action) {
            return (state = initialState);
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

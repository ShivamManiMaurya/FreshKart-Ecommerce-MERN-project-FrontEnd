import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action) {
            // console.log("from userSlice = ", action.payload);
            return (state = action.payload);
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

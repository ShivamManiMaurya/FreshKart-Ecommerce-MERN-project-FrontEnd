import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductData } from "../api";

const STATUES = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error",
});

const initialState = {
    data: [],
    status: STATUES.IDLE,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUES.LOADING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUES.IDLE;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUES.ERROR;
            });
    },
});

export default productSlice.reducer;

export const fetchProduct = createAsyncThunk("product", async () => {
    const data = await getProductData();
    // console.log("thunk = ", data.data);
    return data.data;
});

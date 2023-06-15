import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductData } from "../api";
import toast from "react-hot-toast";

const STATUES = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error",
});

const initialState = {
    data: [],
    cartData: [],
    quantity: 0,
    status: STATUES.IDLE,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart(state, action) {
            if (state.cartData.some((item) => item.id === action.payload.id)) {
                toast("Item is Already in the cart...!");
                return;
            }
            const total = action.payload.price;
            state.cartData.unshift({
                ...action.payload,
                qty: 1,
                total: total,
            });
            toast("Item Added to the Cart.");
        },
        removeFromCart(state, action) {
            const index = state.cartData.findIndex(
                (item) => item.id === action.payload
            );
            state.cartData.splice(index, 1);
            toast("Item is removed");
        },
        increaseItem(state, action) {
            const index = state.cartData.findIndex(
                (item) => item.id === action.payload
            );
            state.cartData[index].qty++;
            const currentQty = state.cartData[index].qty;
            state.cartData[index].total =
                state.cartData[index].price * currentQty;
        },
        decreaseItem(state, action) {
            const index = state.cartData.findIndex(
                (item) => item.id === action.payload
            );
            if (state.cartData[index].qty <= 1) {
                return;
            }
            state.cartData[index].qty--;
            const currentQty = state.cartData[index].qty;
            state.cartData[index].total =
                state.cartData[index].price * currentQty;
        },
    },
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

export const { addToCart, removeFromCart, increaseItem, decreaseItem } =
    productSlice.actions;
export default productSlice.reducer;

export const fetchProduct = createAsyncThunk("product", async () => {
    const data = await getProductData();
    // console.log("thunk = ", data.data);
    return data.data;
});

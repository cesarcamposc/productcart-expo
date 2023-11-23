import { cartSlice } from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        
    },
});

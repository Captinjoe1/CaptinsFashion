import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartslice";

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    product: productReducer,
  },
});


export default store;
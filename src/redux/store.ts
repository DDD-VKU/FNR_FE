import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import { authApi } from "./api/authApi";
import { productApi } from "./api/productAPI";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware
    );
  },
});

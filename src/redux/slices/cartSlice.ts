import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart, ICartItem } from "../../utils/types";
import { cartApi, useGetCartQuery } from "../api/cartApi";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as ICartItem[],
    numberOfItems: 0,
    subTotal: 0,
  },
  reducers: {
    SET_CART: (state, action: PayloadAction<ICart>) => {
      state.items = action.payload.items;
      state.numberOfItems = action.payload.numberOfItems;
      state.subTotal = action.payload.subTotal;
    },
    GET_CART: (state) => {
      return state;
    },
    ADD_TO_CART: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (!existingItem) {
        console.log("Adding new item", action.payload);
        state.items.push(action.payload);
      } else {
        existingItem.quantity += action.payload.quantity;
      }

      state.numberOfItems = state.items.length;
      state.subTotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    INCREMENT_CART: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    DECREMENT_CART: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.updateCart.matchFulfilled,
      (state, action) => {
        console.log(action.payload);
        state.items = action.payload.data.map((item: any) => {
          return {
            id: item.id,
            product: {
              id: item.product_id,
              name: item.name,
            },
            ...item,
          };
        });
        state.numberOfItems = action.payload.total;
        state.subTotal = action.payload.data.reduce(
          (total: number, item: { price: number; quantity: number }) =>
            total + item.price * item.quantity,
          0
        );
        return state;
      }
    );
  },
});

export default cartSlice.reducer;

export const {
  ADD_TO_CART,
  GET_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  SET_CART,
} = cartSlice.actions;

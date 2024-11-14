import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart, ICartItem } from "../../utils/types";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as ICartItem[],
    numberOfItems: 0,
    subTotal: 0,
  },
  reducers: {
    GET_CART: (state) => {
      return state;
    },
    ADD_TO_CART: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product._id === action.payload.product._id
      );

      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += action.payload.quantity;
      }

      state.numberOfItems = state.items.length;
      state.subTotal = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },

    INCREMENT_CART: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    DECREMENT_CART: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});

export default cartSlice.reducer;

export const { ADD_TO_CART, GET_CART, INCREMENT_CART, DECREMENT_CART } =
  cartSlice.actions;

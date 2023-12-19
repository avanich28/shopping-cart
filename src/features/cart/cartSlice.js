import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.cart.find(
        (item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size,
      );
      if (item) {
        item.quantity += action.payload.quantity;
        item.totalPrice += action.payload.totalPrice;
      } else state.cart.push(action.payload);
    },
    deleteItem: {
      prepare(name, size) {
        return {
          payload: {
            name,
            size,
          },
        };
      },
      reducer(state, action) {
        state.cart = state.cart.filter((item) =>
          item.name === action.payload.name && item.size === action.payload.size
            ? false
            : true,
        );
      },
    },
    decreaseQuantity(state, action) {
      const [name, size] = action.payload.split('-');
      const item = state.cart.find(
        (item) => item.name === name && item.size === size,
      );
      item.quantity =
        item.quantity - 1 > 0
          ? --item.quantity
          : cartSlice.caseReducers.deleteItem(state, {
              type: 'deleteItem',
              payload: {
                name,
                size,
              },
            });
      item.totalPrice = item.unitPrice * item.quantity;
    },
    increaseQuantity(state, action) {
      const [name, size] = action.payload.split('-');
      const item = state.cart.find(
        (item) => item.name === name && item.size === size,
      );
      ++item.quantity;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

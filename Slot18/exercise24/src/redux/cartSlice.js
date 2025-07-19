import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existing = state.cart.find(p => p.id === action.payload.id);
      if (!existing) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart(state, action) {
      const item = state.cart.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
 
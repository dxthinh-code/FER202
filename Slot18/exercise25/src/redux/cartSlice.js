import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      item ? item.qty++ : state.push({ ...action.payload, qty: 1 });
    },
    updateQty: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) item.qty = action.payload.qty;
    },
    removeFromCart: (state, action) => state.filter(p => p.id !== action.payload),
  },
});

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, deleteProduct } from './productThunk';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (_, action) => action.payload)
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter(p => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;

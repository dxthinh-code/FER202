import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

// Lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await api.get('/products');
  return res.data;
});

// Thêm sản phẩm mới
export const addProduct = createAsyncThunk('products/add', async (product) => {
  const res = await api.post('/products', product);
  return res.data;
});

// 🗑 Xoá sản phẩm theo id
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await api.delete(`/products/${id}`);
  return id; // trả về id để reducer xoá khỏi state
});

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productThunk';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [form, setForm] = useState({
    id: '', name: '', price: '', catalogs: '', image: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      ...form,
      price: +form.price,
      catalogs: form.catalogs.split(',').map(c => c.trim())
    }));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {['id', 'name', 'price', 'catalogs', 'image'].map(field => (
        <Form.Group key={field} className="mb-3">
          <Form.Label>{field.toUpperCase()}</Form.Label>
          <Form.Control
            type="text"
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        </Form.Group>
      ))}
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default ProductForm;

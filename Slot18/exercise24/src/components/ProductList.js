import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/cartSlice';

const product = {
  id: '123456',
  name: 'Example Product',
  price: 9.99,
  description: 'This is an example product.',
  catalogs: ['catalog1', 'catalog2'],
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="card p-3 mb-4">
      <h4>{product.name}</h4>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Catalogs:</strong> {product.catalogs.join(', ')}</p>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <button className="btn btn-warning" onClick={() => dispatch(updateCart({ id: product.id, quantity: 2 }))}>Update to Cart</button>
        <button className="btn btn-danger" onClick={() => dispatch(deleteFromCart(product.id))}>Delete from Cart</button>
      </div>
    </div>
  );
}

export default ProductList;

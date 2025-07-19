import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.cart);

  if (cartItems.length === 0) return <h5 className="text-muted">Your cart is empty.</h5>;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-4">
      <h4>Your Cart</h4>
      <ul className="list-group">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name} (x{item.quantity}) - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
    </div>
  );
}

export default Cart;

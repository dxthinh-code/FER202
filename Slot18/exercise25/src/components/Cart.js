import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQty } from '../redux/cartSlice';
import { Table, Button, Form } from 'react-bootstrap';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <Form.Control
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => dispatch(updateQty({ id: item.id, qty: +e.target.value }))}
              />
            </td>
            <td>${item.price}</td>
            <td>${item.qty * item.price}</td>
            <td>
              <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;

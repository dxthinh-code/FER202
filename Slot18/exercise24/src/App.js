import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      <h2 className="my-4 text-center">🛒 Redux Shopping Cart</h2>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;

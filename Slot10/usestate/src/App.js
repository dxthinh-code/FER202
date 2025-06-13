import React, { useState } from 'react';
import Counter from './Counter';
import NameAgeInput from './NameAgeInput';
import ProductList from './ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedProductId(parseInt(event.target.value, 10));
  };

  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React useState Examples</h1>

      {/* Ví dụ 1: Counter */}
      <Counter />

      {/* Ví dụ 2: Name & Age Input */}
      <NameAgeInput />

      {/* Ví dụ 3: Checkbox chọn sản phẩm */}
      <ProductList />

      {/* Ví dụ 4: Radio chọn sản phẩm */}
      <div>
        <h2>Example 4: Select product using radio button</h2>
        {products.map(product => (
          <div key={product.id}>
            <input
              type="radio"
              id={`product-${product.id}`}
              name="product"
              value={product.id}
              checked={selectedProductId === product.id}
              onChange={handleRadioChange}
            />
            <label htmlFor={`product-${product.id}`}>{product.name}</label>
          </div>
        ))}

        {selectedProduct && (
          <p>Bạn đã chọn: <strong>{selectedProduct.name}</strong></p>
        )}
      </div>
    </div>
  );
}

export default App;

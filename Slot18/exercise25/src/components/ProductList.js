import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productThunk';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar'; // ✅ import SearchBar
import { Row, Col } from 'react-bootstrap';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(products); // Cập nhật mỗi khi products từ redux thay đổi
  }, [products]);

  const handleSearch = (keyword) => {
    const lower = keyword.toLowerCase();
    const result = products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.catalogs.some(c => c.toLowerCase().includes(lower))
    );
    setFiltered(result);
  };

  const handleReset = () => {
    setFiltered(products);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onReset={handleReset} />

      <Row className="g-4">
        {filtered.map(p => (
          <Col key={p.id} md={4}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductList;

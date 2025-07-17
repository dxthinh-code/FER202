import { useEffect, useState } from 'react';
import api from '../api';
import LaptopCard from './LaptopCard';
import SearchBar from './SearchBar';
import { Container, Row, Col } from 'react-bootstrap';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    api.get('/Laptops').then(res => {
      setLaptops(res.data);
      setFiltered(res.data);
    });
  }, []);

  const handleSearch = (keyword) => {
    const lower = keyword.toLowerCase().trim();

    if (lower === '') {
      setFiltered(laptops); // Nếu ô tìm kiếm bị xóa trắng → hiển thị toàn bộ
      return;
    }

    const result = laptops.filter(l => {
      const fullName = `${l.brand} ${l.model}`.toLowerCase();
      return (
        l.brand.toLowerCase().includes(lower) ||
        l.model.toLowerCase().includes(lower) ||
        fullName.includes(lower)
      );
    });

    setFiltered(result);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Laptop List</h2>
      <SearchBar onSearch={handleSearch} />
      <Row className="g-4">
        {filtered.map(laptop => (
          <Col key={laptop.id} md={3} sm={6}>
            <LaptopCard laptop={laptop} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopList;

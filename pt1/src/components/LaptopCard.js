import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function LaptopCard({ laptop }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={laptop.image}
        alt={`${laptop.brand} ${laptop.model}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
        <Card.Text>
          <strong>Year:</strong> {laptop.year}<br />
          <strong>Price:</strong> {laptop.price}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/laptops/${laptop.id}`)}
          className="mt-auto"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

LaptopCard.propTypes = {
  laptop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default LaptopCard;

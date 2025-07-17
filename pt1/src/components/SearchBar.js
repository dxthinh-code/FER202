import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  return (
    <Form className="d-flex mb-4">
      <Form.Control
        type="text"
        placeholder="Search by brand or model"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <Button variant="primary" onClick={() => onSearch(keyword)} className="ms-2">Search</Button>
    </Form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;

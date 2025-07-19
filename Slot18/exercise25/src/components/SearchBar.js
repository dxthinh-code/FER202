import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';

function SearchBar({ onSearch, onReset }) {
  const [keyword, setKeyword] = useState('');

  return (
    <InputGroup className="mb-4">
      <FormControl
        placeholder="Search products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant="primary" onClick={() => onSearch(keyword)}>Search</Button>
      <Button variant="secondary" onClick={() => {
        setKeyword('');
        onReset();
      }}>
        <ArrowClockwise />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;

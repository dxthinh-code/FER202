import React, { useState } from 'react';

function SearchFilter() {
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  const [query, setQuery] = useState('');

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search Filter</h3>
      <input
        placeholder="Search fruit"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SearchFilter;

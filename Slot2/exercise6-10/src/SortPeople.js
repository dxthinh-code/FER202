function SortPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 16, occupation: "Student" },
    { name: "Eva", age: 22, occupation: "Engineer" },
  ];

  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h3>Sorted by Occupation then Age</h3>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>{p.name} - {p.occupation}, {p.age} years</li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;

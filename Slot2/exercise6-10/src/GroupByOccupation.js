function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 16, occupation: "Student" },
    { name: "Eva", age: 22, occupation: "Engineer" },
  ];

  const grouped = people.reduce((acc, person) => {
    const { occupation } = person;
    if (!acc[occupation]) acc[occupation] = [];
    acc[occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h3>Grouped by Occupation</h3>
      {Object.entries(grouped).map(([job, people]) => (
        <div key={job}>
          <strong>{job}:</strong>
          <ul>
            {people.map((p, i) => (
              <li key={i}>{p.name} - {p.age} years</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;

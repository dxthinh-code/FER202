function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 16, occupation: "Student" },
    { name: "Eva", age: 22, occupation: "Engineer" },
  ];

  const occupationGroups = people.reduce((acc, person) => {
    const { occupation, age } = person;
    if (!acc[occupation]) acc[occupation] = [];
    acc[occupation].push(age);
    return acc;
  }, {});

  const averages = Object.entries(occupationGroups).map(([occupation, ages]) => {
    const avg = (ages.reduce((sum, a) => sum + a, 0) / ages.length).toFixed(1);
    return { occupation, avg };
  });

  return (
    <div>
      <h3>Average Age by Occupation</h3>
      <ul>
        {averages.map(({ occupation, avg }, i) => (
          <li key={i}>{occupation}: {avg} years</li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;

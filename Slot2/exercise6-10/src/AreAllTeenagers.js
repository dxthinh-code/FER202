function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 16, occupation: "Student" },
    { name: "Eva", age: 22, occupation: "Engineer" },
  ];

  const allTeenagers = people.every(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h3>Are All Teenagers?</h3>
      <p>{allTeenagers ? "Yes" : "No"}</p>
    </div>
  );
}

export default AreAllTeenagers;

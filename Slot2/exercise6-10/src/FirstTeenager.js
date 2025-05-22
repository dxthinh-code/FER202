function FirstTeenager() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 16, occupation: "Student" },
    { name: "Eva", age: 22, occupation: "Engineer" },
  ];

  const teenager = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h3>First Teenager</h3>
      {teenager ? (
        <p>{teenager.name} - {teenager.age} years old</p>
      ) : (
        <p>No teenager found</p>
      )}
    </div>
  );
}

export default FirstTeenager;

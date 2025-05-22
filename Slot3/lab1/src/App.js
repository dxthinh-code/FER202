import React, { useState } from "react";

const App = () => {
  // Dữ liệu chung
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  // Bài 1 - Object destructuring
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const { name, age, department } = employee;

  // Bài 4 - Average Age
  const averageAge = (...ages) =>
    (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
  const ageList = employees.map((e) => e.age);

  // Bài 6 - Filter IT Department
  const itEmployees = employees.filter((e) => e.department === "IT");

  // Bài 7 - Sort
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    return deptCompare !== 0 ? deptCompare : a.name.localeCompare(b.name);
  });

  // Bài 8 - Group by department
  const grouped = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(emp);
    return acc;
  }, {});

  // Bài 9 - Check teenager
  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  // Bài 10 - Search
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = employees.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Bài 1 */}
      <h2>Exercise 1 – Render Employee Details</h2>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>

      {/* Bài 2 */}
      <h2>Exercise 2 – Display List with map()</h2>
      <ul>
        {employees.map((e, idx) => (
          <li key={e.id || idx}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>

      {/* Bài 3 */}
      <h2>Exercise 3 – Render Table of Employees</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, idx) => (
            <tr key={e.id || idx}>
              <td>{e.id || idx + 1}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bài 4 */}
      <h2>Exercise 4 – Calculate Average Age</h2>
      <p>Average Age: {averageAge(...ageList)}</p>

      {/* Bài 5 */}
      <h2>Exercise 5 – Render Dropdown of Names</h2>
      <select>
        {employees.map((e, idx) => (
          <option key={e.id || idx}>{e.name}</option>
        ))}
      </select>

      {/* Bài 6 */}
      <h2>Exercise 6 – Filter IT Employees</h2>
      <ul>
        {itEmployees.map((e, idx) => (
          <li key={e.id || idx}>{e.name}</li>
        ))}
      </ul>

      {/* Bài 7 */}
      <h2>Exercise 7 – Sort Employees</h2>
      <ul>
        {sortedEmployees.map((e, idx) => (
          <li key={e.id || idx}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>

      {/* Bài 8 */}
      <h2>Exercise 8 – Group by Department</h2>
      {Object.entries(grouped).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((e, idx) => (
              <li key={e.id || idx}>{e.name}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Bài 9 */}
      <h2>Exercise 9 – Is Any Teenager?</h2>
      <p>{isTeenager.toString()}</p>

      {/* Bài 10 */}
      <h2>Exercise 10 – Search Employee by Name</h2>
      <input
        type="text"
        placeholder="Enter name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResult.map((e, idx) => (
          <li key={e.id || idx}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

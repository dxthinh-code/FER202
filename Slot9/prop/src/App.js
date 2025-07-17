import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
// Dùng Container, Row, Col để bố trí các Card
import StudentCard from "./components/StudentCard"; // Import StudentCard component

function App() {
  const userData = { name: "thichduthu@fe.edu.vn", age: 21 };
  const namesList = ["thichduthu@fe.edu.vn", "thaychua@fe.edu.vn"];
  // Danh sách students
  const students = [
    { name: "chubby@fe.edu.vn", age: 21, avatar: "/images/Chubby.png" },
    { name: "longmongga@fe.edu.vn", age: 21, avatar: "/images/Long.png" },
    { name: "huy@fe.edu.vn", age: 21, avatar: "/images/ThHuy.png" },
  ];

  return (
    <>
      <Welcome name="thichduthu@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row className="g-4 justify-content-center">
          {/* Duyệt qua mảng students và truyền từng đối tượng student vào StudentCard */}
          {students.map((student, index) => (
            <Col key={index} xs={12} md={4} lg={4} xl={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

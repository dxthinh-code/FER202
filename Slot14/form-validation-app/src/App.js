import React from "react";
import MyForm from "./components/MyForm"; 
import RegistrationForm from "./components/RegistrationForm"; 
import { Container } from "react-bootstrap";

const App = () => {
  // Xử lý dữ liệu gửi từ MyForm (Câu 3)
  const handleMyFormSubmit = (data) => {
    console.log("Dữ liệu từ MyForm:", data);
    alert("Đã gửi dữ liệu từ MyForm thành công!");
  };

  // Xử lý dữ liệu gửi từ RegistrationForm (Câu 4)
  const handleRegistrationSubmit = (data) => {
    console.log("Dữ liệu từ RegistrationForm:", data);
    alert("Đã gửi dữ liệu từ RegistrationForm thành công!");
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">PropTypes</h1>

      {/* Bài 3 */}
      <MyForm title="My Form" onSubmit={handleMyFormSubmit} />

      <hr className="my-5" />

      {/* Bài 4 */}
      <RegistrationForm
        title="Registration"
        onSubmit={handleRegistrationSubmit}
      />
    </Container>
  );
};

export default App;

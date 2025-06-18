import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const FullForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const isNameValid = name.trim().length > 0;
  const isGenderValid = gender !== "";
  const isCountryValid = country !== "";
  const isAgreeValid = agree;

  const formValid = isNameValid && isGenderValid && isCountryValid && isAgreeValid;

  return (
    <Form>
      <Form.Group>
        <Form.Label>Họ tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!isNameValid && name !== ""}
        />
        <Form.Control.Feedback type="invalid">Vui lòng nhập tên</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label><br />
        <Form.Check
          inline label="Nam" name="gender" type="radio" id="male"
          onChange={() => setGender("Nam")}
        />
        <Form.Check
          inline label="Nữ" name="gender" type="radio" id="female"
          onChange={() => setGender("Nữ")}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Chọn quốc gia --</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Mỹ</option>
          <option value="jp">Nhật Bản</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!formValid} className="mt-2">Gửi thông tin</Button>
    </Form>
  );
};

export default FullForm;

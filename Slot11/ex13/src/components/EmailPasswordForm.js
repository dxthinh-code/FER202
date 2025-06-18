import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
const isValidPassword = (pwd) => pwd.length >= 8;

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  useEffect(() => {
    if (email !== "") setValidEmail(isValidEmail(email));
    if (password !== "") setValidPassword(isValidPassword(password));
  }, [email, password]);

  const allValid = validEmail && validPassword && email && password;

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!validEmail}
        />
        <Form.Control.Feedback type="invalid">Email không hợp lệ</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!validPassword}
        />
        <Form.Control.Feedback type="invalid">Ít nhất 8 ký tự</Form.Control.Feedback>
      </Form.Group>

      <Button variant="success" type="submit" disabled={!allValid} className="mt-2">Đăng nhập</Button>
    </Form>
  );
};

export default EmailPasswordForm;

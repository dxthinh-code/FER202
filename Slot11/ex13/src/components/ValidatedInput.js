import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateInput = (value) => value.length >= 5;

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const check = validateInput(value);
    setIsValid(check);
    setErrorMessage(check ? "" : "Ít nhất 5 ký tự!");
  }, [value]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Input cần ≥ 5 ký tự</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isValid} className="mt-2">Gửi</Button>
    </Form>
  );
}

export default ValidatedInput;

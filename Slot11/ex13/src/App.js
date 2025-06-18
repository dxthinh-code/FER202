import React, { useState } from "react";
import UserPosts from "./components/UserPosts";
import ValidatedInput from "./components/ValidatedInput";
import EmailPasswordForm from "./components/EmailPasswordForm";
import FullForm from "./components/FullForm";
import { Container, Card } from "react-bootstrap";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">React useEffect Exercises Dashboard</h1>

      {/* Exercise 1 */}
      <Card className="mb-4 p-3">
        <h4>Exercise 1 – Fetch Posts by User ID</h4>
        <UserPosts userId={userId} />
        <button onClick={() => setUserId(userId + 1)} className="btn btn-secondary mt-2">
          Load posts of next user
        </button>
      </Card>

      {/* Exercise 4 */}
      <Card className="mb-4 p-3">
        <h4>Exercise 4 – Validated Text Input</h4>
        <ValidatedInput />
      </Card>

      {/* Exercise 5 */}
      <Card className="mb-4 p-3">
        <h4>Exercise 5 – Email & Password Form Validation</h4>
        <EmailPasswordForm />
      </Card>

      {/* Exercise 6 */}
      <Card className="mb-4 p-3">
        <h4>Exercise 6 – Full Form Validation</h4>
        <FullForm />
      </Card>
    </Container>
  );
}

export default App;

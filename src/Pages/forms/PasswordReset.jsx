import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwordReset } from "../../auth/firebase";
import {
  Form,
  Aside,
  Button,
  Container,
  Input,
  Label,
  Row,
  Title,
} from "./Form.styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PasswordReset = () => {
  const [reset, setReset] = useState();
  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordReset(navigate, reset);
  };

  return (
    <Container>
      <Aside />
      <Form onSubmit={handleSubmit}>
        <Title>Password Reset</Title>
        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) => setReset(e.target.value)}
            required
          />
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default PasswordReset;

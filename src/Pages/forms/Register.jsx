import { useState } from "react";

import { createUser} from "../../auth/firebase";
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

const Register = () => {
  const [register, setRegister] = useState({});
  const navigate = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, surname, email, password } = register;
    createUser(name, surname, email, password, navigate);
  };

  return (
    <Container>
      <Aside />
      <Form onSubmit={handleRegister}>
        <Title> Register Page </Title>
        <Row>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            placeholder="Enter your first name."
            type="text"
            id="firstName"
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
            required
          />
        </Row>

        <Row>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            placeholder="Enter your last name."
            type="text"
            id="lastName"
            onChange={(e) =>
              setRegister({ ...register, surname: e.target.value })
            }
            required
          />
        </Row>

        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            required
          />
        </Row>

        <Row>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password..."
            type="password"
            id="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            required
          />
        </Row>
        <Button type="submit">Register</Button>
        
      </Form>
    </Container>
  );
};

export default Register;

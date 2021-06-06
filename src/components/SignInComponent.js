import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "./AuthErrorAlert";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signin } = useAuth();
  const history = useHistory();

  const handleSignin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signin(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <Row className="LoginCard">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            <Form onSubmit={(e) => handleSignin(e)}>
              <Form.Group className="LoginFormGroup" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="juanperez@mail.com" ref={emailRef}/>
              </Form.Group>
              <Form.Group className="LoginFormGroup" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="****" ref={passwordRef}/>
              </Form.Group>
              <div className="LoginButtonDiv">
                <Button className="botonDefault1" variant="secondary" type="submit" disabled={loading} >
                  Ingresar
                </Button>
              </div>
              <div className="RegisterButtonDiv">
                <Button variant="light" onClick={() => history.push(`/signup`)}>Entra aquí para registrarte.</Button>
              </div>
              {error && <Alert>{error}</Alert>}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}

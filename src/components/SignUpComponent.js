import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from './AuthErrorAlert';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";

export default function SignUpComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);
  const passwordRef = useRef(null);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;
    signup(email, password, fullName)
      .then((ref) => {
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Row className="LoginCard">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text></Card.Text>
    <Form onSubmit={(e) => handleSignup(e)}>
      <Form.Group className="LoginFormGroup" controlId="formBasicName">
        <Form.Label>Nombre*</Form.Label>
        <Form.Control type="text" placeholder="Juan Perez" ref={fullNameRef}/>
        <Form.Text className="text-muted">
          Ingrese su nombre completo.
        </Form.Text>
      </Form.Group>

      <Form.Group className="LoginFormGroup" controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email" placeholder="juanperez@mail.com" ref={emailRef}/>
        <Form.Text className="text-muted">
          Ingrese la su dirección de correo electrónico.
        </Form.Text>
      </Form.Group>

      <Form.Group className="LoginFormGroup" controlId="formBasicPassword">
        <Form.Label>Contraseña*</Form.Label>
        <Form.Control type="password" placeholder="****" ref={passwordRef}/>
        <Form.Text className="text-muted">
          Guarde su contraseña en un lugar seguro.
        </Form.Text>
      </Form.Group>
      <div className="LoginButtonDiv">
      <Button className="botonDefault1" variant="primary" type="submit" disabled={loading}>
        Registrarse
      </Button>

      </div>

      

      <p>*Campos obligatorios</p>
      
      {error && <Alert>{error}</Alert>}

    </Form>
  
        </Card.Body>
      </Card>
    </Row>
  );
}

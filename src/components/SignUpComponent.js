import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from './AuthErrorAlert'

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
    <Form onSubmit={(e) => handleSignup(e)}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre*</Form.Label>
        <Form.Control type="text" placeholder="Juan Perez" ref={fullNameRef}/>
        <Form.Text className="text-muted">
          Ingrese su nombre completo.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email" placeholder="juanperez@mail.com" ref={emailRef}/>
        <Form.Text className="text-muted">
          Ingrese la su dirección de correo electrónico.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña*</Form.Label>
        <Form.Control type="password" placeholder="****" ref={passwordRef}/>
        <Form.Text className="text-muted">
          Guarde su contraseña en un lugar seguro.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        Registrarse
      </Button>

      <p>*Campos obligatorios</p>
      
      {error && <Alert>{error}</Alert>}

    </Form>
  );
}

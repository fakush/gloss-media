import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from './AuthErrorAlert'

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signin } = useAuth();
  const history = useHistory();

  const handleSignin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signin(email, password)
      .then((ref) => {
        setLoading(false);
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={(e) => handleSignin(e)}>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="juanperez@mail.com" ref={emailRef}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="****" ref={passwordRef}/>
    </Form.Group>

    <Button variant="primary" type="submit" disabled={loading}>
      Ingresar
    </Button>
      
    {error && <Alert>{error}</Alert>}

    </Form>
  )

  };
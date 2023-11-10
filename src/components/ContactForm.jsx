import { Form, Button } from "react-bootstrap"; // Importa los componentes de React Bootstrap
import useContactFormHook from "../hook/FormContact";

function ImputFormContact() {
  const {
    nameForm,
    setNameForm,
    email,
    setEmail,
    message,
    setMessage,
    errorMessage,
    handleSubmit,
  } = useContactFormHook();
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-light">Dejanos tu dirección mail</h1>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            id="name"
            minLength="3"
            maxLength="20"
            pattern="^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$"
            placeholder="Escribe tu nombre"
            value={nameForm}
            onChange={(e) => setNameForm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            id="email"
            minLength="11"
            maxLength="35"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            style="height: 200px;"
            as="textarea"
            id="message"
            minLength="15"
            maxLength="300"
            placeholder="Escribe hasta 300 caracteres"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <div className="text-center pt-3">
          <span>{errorMessage}</span>
          <Button type="submit" variant="success">
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ImputFormContact;

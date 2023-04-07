import { Row, Col, Form, FormLabel } from "react-bootstrap";
function DadosPessoais() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome :</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail :</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Digite seu E-mail"
              required
            />
            <Form.Text className="text-muted">
              Nunca vamos compartilhar seu E-Mail com ninguem...
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default DadosPessoais;

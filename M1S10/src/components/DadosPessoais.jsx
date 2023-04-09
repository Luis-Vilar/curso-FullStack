import { Row, Col, Form } from "react-bootstrap";
function DadosPessoais() {
  return (
    <>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            required
          />
        </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="mail">
            <Form.Label>E-mail :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu E-mail"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      </>
  );
}

export default DadosPessoais;

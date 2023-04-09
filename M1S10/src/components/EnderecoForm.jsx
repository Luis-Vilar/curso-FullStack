import { Row, Col, Form, FormLabel } from "react-bootstrap";

function EnderecoForm() {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="logadouro">
            <Form.Label>Logradouro :</Form.Label>
            <Form.Control type="text" placeholder="Logradouro" />
          </Form.Group>
        </Col>
        <Row>
          <Col className="col-4">
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Nome :</Form.Label>
              <Form.Control type="number" placeholder="Nº"  />
            </Form.Group>
          </Col>
          <Col className="col-8">
            <Form.Group className="mb-3" controlId="complemento">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control type="text" placeholder="Complemento" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro:</Form.Label>
              <Form.Control type="text" placeholder="Bairro" />
            </Form.Group>
          </Col>
          <Col className="col-6">
            <Form.Group className="mb-3" controlId="cidade">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control type="text" placeholder="Cidade" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>CEP:</Form.Label>
              <Form.Control type="number" placeholder="CEP" />
            </Form.Group>
          </Col>
          <Col className="col-6">
            <label className="form-label" htmlFor="estado">
              Estado:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="estado"
                id="estado"
                placeholder="Estado"
                required
              />
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default EnderecoForm;

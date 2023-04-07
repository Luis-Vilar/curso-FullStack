import { Row, Col, Form } from "react-bootstrap";

function Agradecimento() {
  return (
    <>
      <h3>Obrigado pelo seu cadastro!</h3>

      <Row>
        <h4>Conte-nos: onde nos conheceu?</h4>
        <Col>
          <select
            className="form-select"
            aria-label="Default select example"
            required
          >
            <option defaultValue>Selecione</option>
            <option value="site">Pelo site</option>
            <option value="linkedind">Pelo LinkedIn</option>
            <option value="instagram">Pelo Instagram</option>
          </select>
        </Col>
      </Row>
      </>
  );
}

export default Agradecimento;

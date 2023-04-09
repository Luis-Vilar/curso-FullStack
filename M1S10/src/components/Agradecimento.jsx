import { Row, Col, Form } from "react-bootstrap";

function Agradecimento() {
  return (
    <>
      <h3>Obrigado pelo seu cadastro!</h3>

      <Form.Text>Conte-nos: onde nos conheceu?</Form.Text>
      <Form.Select size="sm">
        <option> Selecione</option>
        <option value="site">Pelo site</option>
        <option value="linkedind">Pelo LinkedIn</option>
        <option value="instagram">Pelo Instagram</option>
      </Form.Select>
    </>
  );
}

export default Agradecimento;

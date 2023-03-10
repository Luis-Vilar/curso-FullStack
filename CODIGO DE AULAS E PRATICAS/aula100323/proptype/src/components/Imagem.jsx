import PropTypes from "prop-types";

function Imagem(props) {
  return <img src={props.camino} alt={props.alternativa} />;
}

Imagem.propTypes = {
  camino: PropTypes.string.isRequired,
  alternativa: PropTypes.string.isRequired,
};

export default Imagem;

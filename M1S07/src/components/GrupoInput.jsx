import PropTypes from "prop-types";


function GrupoInput(props) {
  return (
    <div className={"form-group"}>
      <label htmlFor={props.htmlFor} className={"form-label"} >
        {props.etiqueta}
      </label>
      <input
        type={props.tipo}
        min={props.min}
        step={props.step}
        id={props.id}
        className={"form-control"}
        value={props.valor}
        required
        onChange={props.aoDigitar}
      />
    </div>
  );
}

GrupoInput.propTypes = {
  id: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  aoDigitar: PropTypes.func.isRequired,
};
export default GrupoInput;

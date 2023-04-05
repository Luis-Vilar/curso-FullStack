import React from "react";

function Agradecimento (props) {
  return (
    <>
      <h1>Obrigado pelo seu cadastro!</h1>
      <h3>Conte-nos : onde nos conheceu?</h3>
      <div className="form-group">
        <select name="selecioneContato" id="selecioneContato">
          <option value="">Seleccione</option>
          <option value="dog"> Pelo site</option>
          <option value="cat">Pelo LinkedIn</option>
          <option value="hamster">Pelo Instagram</option>
        </select>
      </div>
  
    </>
  );
};

export default Agradecimento;

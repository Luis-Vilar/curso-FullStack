import { useState } from "react";

function CardAdicionar(props) {
  const [textoTarefa, setTextoTarefa] = useState("");
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="adicionartarefa"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />
      <button className= "btn btn-secondary" onClick={()=> props.criarNovaTarefa(textoTarefa)}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;

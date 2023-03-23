import { useState } from "react";

function CardAdicionar(props) {
  const [textoTarefa, setTextoTarefa] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="adicionartarefa"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />
      <button onClick={()=> props.criarNovaTarefa(textoTarefa)}>Adicionar</button>
    </>
  );
}

export default CardAdicionar;

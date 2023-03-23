import { useState } from "react";
function ListItem(props) {
  const [estadoTarefa, setEstadoTarefa] = useState(false);
  function finalizarTarefa() {
    setEstadoTarefa(!estadoTarefa);
  }
  return (
    <div className="card w-25"  key={props.tarefa.id}>
      <div className="card-body">
        <h3>{props.tarefa.texto}</h3>
        <h6>{estadoTarefa ? "Tarefa Finalizada" : "Tarefa Pendente"}</h6>
      </div>

      <button className="btn btn-primary" onClick={finalizarTarefa}>
        {estadoTarefa ? "ATIVAR" : "FINALIZAR"}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.removeTarefa(props.tarefa.id)}
      >
        REMOVER
      </button >
    </div>
  );
}

export default ListItem;

import { useState } from "react";
function ListItem(props) {
    const [estadoTarefa, setEstadoTarefa] = useState(false)
    function finalizarTarefa(){
        setEstadoTarefa(!estadoTarefa);
    }
    return ( 
        <div key= {props.tarefa.id}>
            <p>{props.tarefa.texto}</p>
            <p>{estadoTarefa ? 'Tarefa Finalizada':'Tarefa Pendente'}</p>
            <button onClick={finalizarTarefa}>{estadoTarefa ? 'ACTIVAR':'FINALIZAR'}</button>
            <button onClick={()=> props.removeTarefa(props.tarefa.id)}>Remover Tarefa</button>
        </div>
     );
}

export default ListItem;
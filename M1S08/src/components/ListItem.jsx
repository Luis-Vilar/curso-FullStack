import { useState } from "react";
function ListItem(props) {
    const [estadoTarefa, setEstadoTarefa] = useState(false)
    function finalizarTarefa(){
        setEstadoTarefa(true);
    }
    return ( 
        <div key= {props.tarefa.id}>
            <p>{props.tarefa.texto}</p>
            <button onClick={()=> finalizarTarefa}>Finalizar Tarefa</button>
            <button onClick={()=> props.removeTarefa(props.tarefa.id)}>Remover Tarefa</button>
        </div>
     );
}

export default ListItem;
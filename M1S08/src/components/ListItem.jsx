import { useState } from 'react';
function ListItem(props) {
    const [finalizado, setfinalizado] = useState(props.tarefa.finalizado);

    function finalizarTarefa(){
        setfinalizado(!finalizado);
    }
    
    return ( 
        <div className="ListItem">
            <p>{props.tarefa.texto}</p>
            <button onAuxClick={finalizarTarefa()}>Finalizar</button>
        </div>
     );
}

export default ListItem;

// Crie um componente para exibir as informações de cada tarefa. 
// Ele deve ser chamado de ListItem. Ele deve receber como props 
// a tarefa a ser exibida.
// Nele adicione um useState para guardar o estado da tarefa que
// está sendo recebida como props (O valor de finalizado).
// Em seguida crie uma função para finalizar a tarefa e um botão 
// para chamar essa função.
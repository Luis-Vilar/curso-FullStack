import { useState } from 'react';
function CardAdicionar(props) {
    const[textoTarefa, settextoTarefa] = useState('');
  return (
    <div className="CardAdicionar">
        <input placeholder="adicionar tarefa" type="text"  value={textoTarefa} onChange={(e)=>settextoTarefa(e.target.value)}/>
        <button onClick={()=> props.criarTarefa(textoTarefa)}>Adicionar</button>
    </div>);
}

export default CardAdicionar;



// Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. Siga os passos do checklist abaixo para finalizar a tarefa.

// 1 - Crie um useState para guardar o texto da tarefa;

// 2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;

// 3 - crie um botão para chamar a função de adicionar a tarefa;

// 4 - faça o botão chamar a função de adicionar tarefa

// Este componente deve receber como prop a função para criar a tarefa e adicionar a lista de tarefas.

// Por fim importe esse componente no App.jsx.

//
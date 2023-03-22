import CardAdicionar from "./components/CardAdicionar";
import{useState} from 'react';

function App() {

const [tarefas, settarefas] = useState([]);

function criarTarefa(textoTarefa){
  const novaTarefa = {
    id: Date.now(),
    texto: textoTarefa,
    finalizado: false
  }
  settarefas([...tarefas, novaTarefa]);
}

  return (
    <div className="App">
      <CardAdicionar criarTarefa={criarTarefa}/>
    </div>
  );
}

export default App;








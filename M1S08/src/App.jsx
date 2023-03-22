import CardAdicionar from "./components/CardAdicionar";
import{useState} from 'react';
function App() {
const [tarefas, settarefas] = useState([]);
  return (
    <div className="App">
      <CardAdicionar/>
    </div>
  );
}

export default App;

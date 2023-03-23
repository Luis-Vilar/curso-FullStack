// imports
// import './App.css'
import React from "react";
import CardAdicionar from "./components/CardAdicionar";
import { useState } from "react";
import ListItem from "./components/ListItem";
// inicio Componente
function App() {
  //variaveis
  const [listaTarefs, setListaTarefas] = useState([]);
  //funcoes
  function criarNovaTarefa(textoTarefa) {
    const novaTarefa = {
      id: Date.now(),
      texto: textoTarefa,
      finalizado: false,
    };
    const novaListaTarefas = [...listaTarefs, novaTarefa];
    setListaTarefas(novaListaTarefas);
    console.log(listaTarefs);
  }
  function removerTarefa(id) {
    const novaListaTarefas = listaTarefs.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(novaListaTarefas);
  }
  //render
  return (
    <div className="container-sm pt-3">
      {/* componentes externos*/}
      <CardAdicionar criarNovaTarefa={criarNovaTarefa} />
      <div className="d-flex flex-wrap">
        {listaTarefs.map((tarefa) => (
          <ListItem tarefa={tarefa} removeTarefa={removerTarefa} />
        ))}
      </div>
    </div>
  );
}
//export
export default App;

// imports
import './App.css'
import React from 'react'
import CardAdicionar from './components/CardAdicionar'
import { useState } from 'react'
import ListItem from './components/ListItem'
// inicio Componente
function App() {
  //variaveis
  const [listaTarefs, setListaTarefas] = useState([])
//funcoes
function criarNovaTarefa(textoTarefa) {
  const novaTarefa = {
    id: Date.now(),
    texto: textoTarefa,
    finalizado: false,
  }
  const novaListaTarefas = [...listaTarefs, novaTarefa]
  setListaTarefas(novaListaTarefas)
  console.log(listaTarefs)

}

  return (
    <div className="App">
      {/* componentes externos*/}
      <CardAdicionar criarNovaTarefa={criarNovaTarefa} />
      <ul>
        {listaTarefs.map((tarefa) => (
          <ListItem tarefa={tarefa} />
        ))}
        
      </ul>
    </div>
  )
}
//export
export default App

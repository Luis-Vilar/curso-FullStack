// imports
import './App.css'
import React from 'react'
import CardAdicionar from './components/CardAdicionar'
import { useState } from 'react'
// inicio Componente
function App() {
  //variaveis
  const [listaTarefs, setListaTarefas] = useState([])
//funcoes
function criarNovaTarefa() {
  const novaTarefa = {
    id: Date.now(),
    texto: textoTarefa,
    finalizado: false,
  }
  const novaListaTarefas = [...listaTarefs, novaTarefa]
  setListaTarefas(novaListaTarefas)
  setTextoTarefa('')
}

  return (
    <div className="App">
      {/* componentes externos*/}
      <CardAdicionar criarNovaTarefa={criarNovaTarefa()} />
    </div>
  )
}
//export
export default App

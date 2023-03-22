// imports
import './App.css'
import React from 'react'
import CardAdicionar from './components/CardAdicionar'
import { useState } from 'react'
// inicio Componente
function App() {
  //variaveis
  const [listaTarefs, setListaTarefas] = useState([])

  return (
    <div className="App">
      {/* componentes externos*/}
      <CardAdicionar adicionarTarefa={()=> console.log('recevefuncao')} />
    </div>
  )
}
//export
export default App

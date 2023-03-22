// imports
import './App.css'
import React from 'react'
import CardAdicionar from './components/CardAdicionar'
// inicio Componente
function App() {
  
  return (
    <div className="App">
      {/* componentes externos*/}
      <CardAdicionar adicionarTarefa={()=> console.log('recevefuncao')} />
    </div>
  )
}
//export
export default App

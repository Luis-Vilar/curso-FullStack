import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardProps from './components/CardProps'


function App() {
  // variables para los props de CardProps
  const tit = "Carro Audi"
  const imgAudi ='data:image/jpeg;base64,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'
  const wsize = "500"


  return (
    // siempre dentro de una tag padre
    <div className="App" >
      {/* componente sin props */}
      <Card/>

      {/* componente con props */}
      <CardProps w={wsize} titulo ={tit}  img = {imgAudi}/>

    </div>
  )
}

export default App
import { useState } from "react";
import "./App.css";

function App() {
  const [verdad, setVerdad] = useState(false);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={()=>setVerdad(true)}>mostrar hola</button>
      <button onClick={()=>setVerdad(false)}>quitar hola</button>
      <h2>{verdad && "hola"}</h2>

    </div>
  );
}


<button onClick={()=>setLogin(false)}>logar</button>

export default App;

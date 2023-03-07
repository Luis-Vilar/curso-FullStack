import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id='textoPrinccipal'>Vite + React</h1>
      <div className="card">
        <button id="btnCount" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edite <code>src/App.jsx</code> y salve para probar HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click en los logos de Vite y React para aprender mas !!!
      </p>
    </div>
  );
}

export default App;

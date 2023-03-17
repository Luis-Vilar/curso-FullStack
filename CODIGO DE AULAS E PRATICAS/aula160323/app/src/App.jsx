import { useEffect } from "react";
import { useState } from "react";

const corInicial = "btn-primary";

function App() {
  const [nome, setNome] = useState("Turma Itaguaçu!!!!!!!!!!!!!!");
  const [cor, setCor] = useState(corInicial);
  useEffect(() => {
    console.log("componente montado");
    return () => {
      console.log("componente desmontado");
    };
  } );
  document.title = nome;

  function handleAlterarCor() {
    console.log("evento disparado");
    setCor("btn-danger");
  }

  return (
    <div
      onMouseLeave={() => {
        alert("Não se vá!");
      }}
    >
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{nome}</span>
        </div>
      </nav>

      <main className="container mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quasi?
        Aliquam officiis quos libero optio deleniti ab necessitatibus asperiores
        id cupiditate, recusandae temporibus repellendus ipsa harum quisquam
        quibusdam. Asperiores, nam.
        <br />
        <button
          onClick={() => {
            setNome("Turma Itaguaçu! A melhor turma do Floripa + Tech");
          }}
          type="button"
          className={`btn ${cor} mt-5`}
        >
          Primary
        </button>
        <br />
        <div
          onMouseOver={handleAlterarCor}
          className="w-25  bg-dark text-light"
        >
          oi
        </div>
      </main>
    </div>
  );
}

export default App;

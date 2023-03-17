import { useState, useEffect } from "react";

function App2() {
  const corInicial = "btn-primary";

  const [nome, setNome] = useState(""); // ["", function() { ... }];
  const [cor, setCor] = useState(corInicial);

  function handleSubmeterFormulario() {
    alert(nome);
  }

  useEffect(() => {
    console.log(corInicial);
  }, []);

  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Turma Itaguaçu!</span>
        </div>
      </nav>

      <main className="container mt-4">
        <br />
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="digite o seu nome..."
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <button
          onClick={handleSubmeterFormulario}
          type="button"
          className={`btn ${cor} mt-1`}
        >
          Primary
        </button>
      </main>
    </div>
  );
}

export default App2;
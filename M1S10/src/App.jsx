import DadosPessoais from "./components/DadosPessoais";
import Endereco from "./components/Endereco";
import Agradecimento from "./components/Agradecimento";
import React, { useState } from "react";
function App() {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(passo, evento) {
    evento.preventDefault();
    // aqui vai a lógica da alteração do passo
    setPassoAtual(passoAtual + passo);
  }

  return (
    <div className="App">
      <h1>Cadastre-se Gratuitamente!</h1>
      <p>
        Faça o seu cadastro para ter accesso a todos os recursos da nossa
        plataforma
      </p>

      <form>
        {passoAtual === 0 && <DadosPessoais />}
        {passoAtual === 1 && <Endereco />}
        {passoAtual === 2 && <Agradecimento />}
        <div>
          {/* inserir botoes */}
          {passoAtual === 0 && (
            <input
              type="button"
              className="btn btn-light"
              onClick={(evento) => mudarPasso(1, evento)}
              value="Avancar"
            />
          )}
          {passoAtual === 1 && (
            <input
              type="button"
              className="btn btn-light"
              onClick={(evento) => mudarPasso(-1, evento)}
              value="Voltar"
            />
          )}
          {passoAtual === 1 && (
            <input
              type="button"
              className="btn btn-light"
              onClick={(evento) => mudarPasso(1, evento)}
              value="Avancar"
            />
          )}
          {passoAtual === 2 && (
            <input
              type="button"
              className="btn btn-light"
              onClick={(evento) => mudarPasso(-1, evento)}
              value="Voltar"
            />
          )}
          {passoAtual === 2 && (
            <input
              type="button"
              className="btn btn-light"
              onClick={(evento) => mudarPasso(-2, evento)}
              value="Enviar"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default App;

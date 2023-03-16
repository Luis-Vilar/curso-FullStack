import { Header } from "./components/Header";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import { useState } from "react";

export const App = () => {
  const [negociacoes, setNegociacoes] = useState([]);

  const adicionarNegociacao = (negociacao) => {
    setNegociacoes([...negociacoes, negociacao]);
  };

  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Formulario quandoAdicionar={adicionarNegociacao} />
        <Tabela negociacoes={negociacoes} />
      </div>
    </div>
  );
};


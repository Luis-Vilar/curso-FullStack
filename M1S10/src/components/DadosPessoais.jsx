import React from "react";

function DadosPessoais(props) {
  return (
    <>
      <div className="form-group">
        <span>Dados Pessoais</span> <span>Endereço</span>{" "}
        <span>Agradecimiento</span>
      </div>
      <div>
        <label htmlFor="nome">Nome :</label>
        <input
          id="nome"
          type="text"
          className="form-control"
          placeholder="Digite o seu nome "
          aria-label="nome"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail :</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Digite o seu e-mail "
          aria-label="e-mail"
        />
      </div>
      
    </>
  );
}

export default DadosPessoais;

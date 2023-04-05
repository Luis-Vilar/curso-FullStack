import React from "react";

function Endereco (props) {
  return (
    <>
      <div className="form-group">
        <span>Dados Pessoais</span> <span>Endereço</span>{" "}
        <span>Agradecimiento</span>
      </div>
      <div>
        <label htmlFor="logradouro">Logradouro :</label>
        <input
          id="logradouro"
          type="text"
          className="form-control"
          placeholder="Digite o seu logradouro "
          aria-label="logradouro"
        />
      </div>

      <div className="form-group">
        <label htmlFor="numero">Numero :</label>
        <input
          id="numero"
          type="number"
          className="form-control"
          placeholder="Nº xxx "
          aria-label="numero"
        />
      </div>
      <div className="form-group">
        <label htmlFor="complemento">Complemento :</label>
        <input
          id="complemento"
          type="text"
          className="form-control"
          placeholder="Seu complemento"
          aria-label="complemento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bairro">Bairro :</label>
        <input
          id="bairro"
          type="text"
          className="form-control"
          placeholder="Seu bairro"
          aria-label="bairro"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cidade">Cidade :</label>
        <input
          id="cidade"
          type="text"
          className="form-control"
          placeholder="Sua cidade"
          aria-label="cidade"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cep">CEP :</label>
        <input
          id="cep"
          type="number"
          className="form-control"
          placeholder="Seu CEP"
          aria-label="cep"
        />
      </div>

      <div className="form-group">
        <label htmlFor="estado">Estado :</label>
        <input
          id="estado"
          type="text"
          className="form-control"
          placeholder="Seu estado"
          aria-label="estado"
        />
      </div>
     
    </>
  );
};

export default Endereco;

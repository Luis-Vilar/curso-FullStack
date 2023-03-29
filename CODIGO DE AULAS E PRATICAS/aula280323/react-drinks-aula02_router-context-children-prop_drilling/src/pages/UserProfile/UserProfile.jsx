import React from "react";
import { useState } from "react";

export const UserProfile = () => {
  const [pessoa, dispatch] = useState({
    nome: "Michael Nascimento",
  });

  return (
    <div className="profile__container">
      <div className="profile__header">
        <div className="profile__image-container">
          <img src="https://github.com/mikansc.png" alt="Michael" />
        </div>
        <div className="profile__user-data">
          <p>bem vindo de volta,</p>
          <h1 className="profile__name">{pessoa.nome}</h1>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__orders">
          <h2>Últimos pedidos</h2>
          <div className="profile__orders-container"></div>
        </div>
      </div>
    </div>
  );
};

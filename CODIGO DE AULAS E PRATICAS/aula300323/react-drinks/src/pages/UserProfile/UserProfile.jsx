import React from "react";
import { useState } from "react";
import { Counter } from "../../components/Counter";
import { Orders } from "../../components/Orders/Orders";

export const UserProfile = () => {
  const [pessoa, setPessoa] = useState({
    nome: "Michael Nascimento",
    gihub: "https://github.com/mikansc.png",
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
        <Orders />
      </div>
    </div>
  );
};

import React from "react";
import { Order } from "./Order";

export class Orders extends React.Component {
  render() {
    return (
      <div className="orders">
        <h2>Últimos pedidos</h2>
        <Order number={101314} date="23/03/2023" />
        <Order number={101313} date="22/03/2023" />
        <Order number={101312} date="19/03/2023" />
        <Order number={101311} date="08/03/2023" />
      </div>
    );
  }
}

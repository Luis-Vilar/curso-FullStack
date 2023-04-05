import React from "react";
import { OrderItem } from "./OrderProduct";

export class Order extends React.Component {
  render() {
    return (
      <div className="order__container">
        <div className="order__header">
          <h4 className="order__number">Pedido num. 101314</h4>
          <span className="order__date">23/03/2023</span>
        </div>

        <table className="order__table">
          <thead>
            <tr>
              <th>Num. Pedido</th>
              <th>produto</th>
              <th>preço</th>
              <th>quantidade</th>
            </tr>
          </thead>
          <tbody>
            <OrderItem
              item={{
                id: 1,
                name: "Café",
                price: 5,
                quantity: 1,
              }}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export const OrderItem = ({ item }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
    </tr>
  );
};

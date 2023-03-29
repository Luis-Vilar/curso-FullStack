export const Card = ({ product }) => {
  return (
    <div className="product_card__container">
      <div className="product_card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product_card__content">
        <h3 className="product_card__title">{product.name}</h3>
        <p>{product.description}</p>
        <div className="product_card__price">
          Preço: <span>{product.price}</span>
        </div>
        <div className="product_card__action">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

import { Card } from "../Card/Card";
import { useContext } from "react";
import { productsContext } from "../../contexts/context";
export const ProductGrid = () => {
  const context = useContext(productsContext);

  return (
    <section className="product_grid__container">
      <div className="product_grid__grid">
        {context.products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </section>
  );
};

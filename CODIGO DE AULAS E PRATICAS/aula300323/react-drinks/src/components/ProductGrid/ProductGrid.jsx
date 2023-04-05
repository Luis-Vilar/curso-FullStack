import { useProducts } from "../../contexts/context";
import { Card } from "../Card/Card";

export const ProductGrid = () => {
  const context = useProducts();

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

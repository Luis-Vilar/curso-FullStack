import { Card } from "../Card/Card";

export const ProductGrid = ({ products = [] }) => {
  return (
    <section className="product_grid__container">
      <div className="product_grid__grid">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </section>
  );
};

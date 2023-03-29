import { ProductGrid } from "../../components/ProductGrid/ProductGrid";

export const Products = ({ productList }) => {
  return (
    <main className="products__container">
      <h3>Todos os Produtos</h3>
      <ProductGrid products={productList} />
    </main>
  );
};

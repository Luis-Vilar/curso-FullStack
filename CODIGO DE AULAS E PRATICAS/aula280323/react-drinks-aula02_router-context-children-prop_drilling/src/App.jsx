import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductsProvider } from "./contexts/context";

export const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsProvider>
      <Header />
      <Outlet />
    </ProductsProvider>
  );
};

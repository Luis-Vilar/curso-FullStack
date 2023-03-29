import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { UserProfile } from "./pages/UserProfile/UserProfile";

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.dir);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

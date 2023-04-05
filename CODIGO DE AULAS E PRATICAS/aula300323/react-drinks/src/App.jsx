import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductProvider } from "./contexts/context";

export const App = () => {
  return (
    <ProductProvider>
      <Header />
      <Outlet />
    </ProductProvider>
  );
};

import { useEffect, createContext, useState, useContext } from "react";

export const productContext = createContext();

export const useProducts = () => {
  const context = useContext(productContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => setProducts(dados));
  }, []);

  const contextValues = { products };

  return (
    <productContext.Provider value={contextValues}>
      {children}
    </productContext.Provider>
  );
};

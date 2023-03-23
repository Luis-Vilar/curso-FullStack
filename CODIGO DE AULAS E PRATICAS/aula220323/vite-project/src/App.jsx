import "./App.css";
import { UsuarioContext } from "./context/UsuarioContext";
import { useContext } from "react";
import Item  from './context/Item';

function App() {
  const usuario = useContext(UsuarioContext);
  return (
    <UsuarioContext.Provider value={usuario}>
      <Item />
    </UsuarioContext.Provider>
  );
}

export default App;

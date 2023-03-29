import { Link } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../contexts/context";
export const Header = () => {
  const context = useContext(productsContext);
  return (
    <header className="header__container">
      <div className="header__logo">
        <h1>App Exemplo</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navlinks">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/usuario">Perfil</Link>
          </li>
        </ul>
      </nav>
      <div>{context.products.length}</div>
    </header>
  );
};

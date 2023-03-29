import { Link } from "react-router-dom";

export const Header = () => {
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
    </header>
  );
};

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="home__container">
      <h1 className="home__title">Seja bem vindo à loja!</h1>
      <span className="home__description">
        <Link to="/produtos">Clique aqui</Link> para ver os produtos
      </span>
    </main>
  );
};

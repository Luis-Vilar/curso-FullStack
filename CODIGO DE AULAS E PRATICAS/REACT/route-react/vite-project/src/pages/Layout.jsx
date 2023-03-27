import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     
      <div className="container d-flex flex-column text-start">

        <nav class="navbar navbar-expand navbar-light bg-secondary" >
          <ul class="nav navbar-nav">
            <li className="list-item">
              <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link class="nav-link active" to="/blogs">Blogs</Link>
            </li>
            <li className="list-item">
              <Link class="nav-link active" to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;



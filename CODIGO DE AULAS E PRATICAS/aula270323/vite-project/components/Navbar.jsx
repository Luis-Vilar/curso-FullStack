import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#f1f1f1",
        margin: "0 auto",
        padding: "20px 10px",
      }}
    >
      <h1>Site title</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>sobre</Link>
    </nav>
  );
}

export default NavBar;

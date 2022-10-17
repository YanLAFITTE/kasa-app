import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header
      style={{
        borderBottom: "solid 1px",
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavLink to="/">
        <h1>KAZA</h1>
      </NavLink>
      <div>
        <nav>
          <NavLink to="/">Accueil</NavLink> |{" "}
          <NavLink to="/about">A propos</NavLink>
        </nav>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
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

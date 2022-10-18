import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logoHeader from "../assets/logo-header.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img className={classes.headerImg} src={logoHeader} alt="logo" />
      </NavLink>
      <div>
        <nav>
          <NavLink className={classes.headerNavLink} to="/">
            Accueil
          </NavLink>
          <NavLink className={classes.headerNavLink} to="/about">
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

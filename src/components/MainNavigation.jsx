import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logoHeader from "../assets/logo-header.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img className={classes.headerImg} src={logoHeader} alt="logo" />
      </Link>
      <div>
        <nav className={classes.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/about"
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

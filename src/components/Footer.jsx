import logo from "../assets/logo.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <img src={logo} alt="logo" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}

import logoFooter from '../assets/logo-footer.png';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <img className={classes.footerImg} src={logoFooter} alt='logo' />
            <h3 className={classes.footerText}>
                © 2022 Kasa. All rights reserved
            </h3>
        </footer>
    );
}

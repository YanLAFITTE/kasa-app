import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './ErrorPage.module.css';

export default function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main className={classes.errorContainer}>
                <h1 className={classes.title}>404</h1>
                <p className={classes.paragraph}>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to='/' className={classes.link}>
                    Retourner sur la page d'accueil
                </Link>
            </main>
        </>
    );
}

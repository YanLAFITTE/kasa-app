import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

/**
 *
 * @returns  error page
 */

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main className='error-container'>
                <h1 className='error-title'>404</h1>
                <p className='error-paragraph'>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to='/' className='error-link'>
                    Retourner sur la page d'accueil
                </Link>
            </main>
        </>
    );
};

export default ErrorPage;

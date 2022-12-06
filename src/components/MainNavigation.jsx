import { NavLink } from 'react-router-dom';
import logoHeader from '../assets/logo-header.png';

/**
 *
 * @returns main navigation
 */

const MainNavigation = () => {
    return (
        <header className='header'>
            <h1>
                <img className='header-img' src={logoHeader} alt='kasa' />
            </h1>

            <div>
                <nav className='nav'>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                        end
                        to='/'
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                        end
                        to='/about'
                    >
                        A propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default MainNavigation;

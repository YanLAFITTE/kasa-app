import { NavLink, Link } from 'react-router-dom';
import logoHeader from '../assets/logo-header.png';

const MainNavigation = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header-img' src={logoHeader} alt='logo' />
            </Link>
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

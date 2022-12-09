import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

/**
 *
 * @returns layout
 */

/** Create the layout by adding header, footer and the children pages in "Outlet" */

const RootLayout = () => {
    return (
        <div className='layout'>
            <MainNavigation />
            <main className='layout-main'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;

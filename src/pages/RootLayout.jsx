import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <MainNavigation />
            <main className='layout-main'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;

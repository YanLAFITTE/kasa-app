import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className='layout-main'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

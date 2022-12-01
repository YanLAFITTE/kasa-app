import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main style={{ padding: '0 50px', height: '100%' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

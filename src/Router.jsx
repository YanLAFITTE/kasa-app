import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Home, { loader as homeLoader } from './pages/Home';
import About, {loader as aboutLoader} from './pages/About';
import ErrorPage from './pages/ErrorPage';
import RentalDetailsPage, {
    loader as rentalLoader,
} from './pages/RentalDetailsPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route
                path=':id'
                element={<RentalDetailsPage />}
                loader={rentalLoader}
            />
            <Route path='about' element={<About />} loader={aboutLoader} />
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />;
}

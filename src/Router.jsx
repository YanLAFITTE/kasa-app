import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import RentalDetailsPage from './pages/RentalDetailsPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './pages/RootLayout';
import aboutData from './data/aboutData.json';
import rentalData from './data/rentalsData.json';
import homeBanner from './assets/banner-home.webp';
import aboutBanner from './assets/banner-about.webp';

/**  Create a router constant whith react-router-dom 6.4.5 version
 *   React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 *   The "loader" function sends the data to the page
 */

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
            <Route
                index
                element={<Home banner={homeBanner} />}
                loader={() => {
                    return rentalData;
                }}
            />

            <Route
                path=':id'
                element={<RentalDetailsPage />}
                loader={() => {
                    return rentalData;
                }}
            />
            <Route
                path='about'
                element={<About banner={aboutBanner} />}
                loader={() => {
                    return aboutData;
                }}
            />
        </Route>
    )
);

/**  Router constant is added to the router provider which is export */

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

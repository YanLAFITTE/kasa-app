import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import RentalDetailsPage from './pages/RentalDetailsPage';
import RootLayout from './pages/RootLayout';

/**  Create a router constant whith react-router-dom 6.4.5 version
 *   React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 *   The "loader" function sends the data to the page
 */

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
            <Route
                index
                element={<Home />}
                loader={async () => {
                    return await fetch(
                        window.location.origin + '/rentalsData.json'
                    );
                }}
            />
            <Route
                path=':id'
                element={<RentalDetailsPage />}
                loader={async () => {
                    return await fetch(
                        window.location.origin + '/rentalsData.json'
                    );
                }}
            />
            <Route
                path='about'
                element={<About />}
                loader={async () => {
                    return await fetch(
                        window.location.origin + '/aboutData.json'
                    );
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

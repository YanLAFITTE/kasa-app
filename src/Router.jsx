import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import RentalDetailsPage from './pages/RentalDetailsPage';
import RootLayout from './pages/RootLayout';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/rental/:id' element={<RentalDetailsPage />} />
                    <Route path='/about' element={<About />} />
                </Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

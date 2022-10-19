import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";
import RentalDetailsPage from "./routes/RentalDetailsPage";
import RootLayout from "./routes/RootLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<RentalDetailsPage />} />
          <Route path="/about" element={<About />} />
        </Route>
          <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

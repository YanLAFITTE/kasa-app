import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main style={{ height: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

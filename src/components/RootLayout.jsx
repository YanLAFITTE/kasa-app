import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
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

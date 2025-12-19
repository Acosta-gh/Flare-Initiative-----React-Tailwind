import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";

export default function Layout() {
  return (
    <>
      <CrisisBanner />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

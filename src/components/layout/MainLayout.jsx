import { Outlet } from "react-router-dom";
import Footer from "../share/Footer";
import NavBar from "../share/Navbar";
import SearchBar from "../share/SearchBar";

function MainLayout() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Outlet />
    </>
  );
}

export default MainLayout;

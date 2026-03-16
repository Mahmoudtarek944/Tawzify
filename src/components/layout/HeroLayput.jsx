import { Outlet } from "react-router-dom";
import NavBarHero from "../pages/NavBarHero";

function HeroLayout() {
  return (
    <>
      <NavBarHero />
      <Outlet />
    </>
  );
}

export default HeroLayout;

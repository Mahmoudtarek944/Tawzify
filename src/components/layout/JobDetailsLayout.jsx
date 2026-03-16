import { Outlet } from "react-router-dom";
import NavBar from "../share/Navbar";

function JobDetailsLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default JobDetailsLayout;

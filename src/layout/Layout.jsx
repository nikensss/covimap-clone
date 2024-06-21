import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker_zero/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="box-border m-0 p-0">
      <Navbar />
       <TrackerZero /> 
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

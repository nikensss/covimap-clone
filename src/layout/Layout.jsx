import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

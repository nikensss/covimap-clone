import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from '../pages/home'
import Tracker1 from "../pages/tracker1";
import Tracker2 from "../pages/tracker2";
import Tracker3 from "../pages/tracker3";
import Tracker4 from "../pages/tracker4";
import Tracker5 from "../pages/tracker5";
import Tracker6 from "../pages/tracker6";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tracker1",
        element: <Tracker1 />,
      },
      {
        path: "/tracker2",
        element: <Tracker2 />,
      },
      {
        path: "/tracker3",
        element: <Tracker3 />,
      },
      {
        path: "/tracker4",
        element: <Tracker4 />,
      },
      {
        path: "/tracker5",
        element: <Tracker5 />,
      },
      {
        path: "/tracker6",
        element: <Tracker6 />,
      },
    ],
  },
]);

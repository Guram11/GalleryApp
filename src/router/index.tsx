import { RouteObject } from "react-router-dom";
import MainNav from "../components/MainNav";
import Home from "../pages/Home";
import History from "../pages/History";

const routes: RouteObject[] = [
  {
    element: <MainNav />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <History />,
        path: "/history",
      },
    ],
  },
];

export default routes;

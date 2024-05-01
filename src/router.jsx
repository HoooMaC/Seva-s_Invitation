import { createBrowserRouter } from "react-router-dom";

import First from "./pages/First";
import Letter from "./pages/Letter";
import Home from "./pages/Home";
import Couple from "./pages/Couple";
import Family from "./pages/Family"
import Date from "./pages/Date"

import MainMenu from "./layouts/MainMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/letter",
    element: <Letter />,
  },

  // main section
  {
    path: "/",
    element: <MainMenu />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/couple",
        element: <Couple />,
      },
      {
        path: "/family",
        element: <Family />,
      },
      {
        path: "/date",
        element: <Date />,
      },
    ],
  },
]);

export default router;

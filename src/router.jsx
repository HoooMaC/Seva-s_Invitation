import { createBrowserRouter } from "react-router-dom";

import First from "./pages/First";
import Letter from "./pages/Letter";
import Home from "./pages/Home";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/couple",
    element: <Home />,
  },
  {
    path: "/family",
    element: <Home />,
  },
  {
    path: "/date",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Home />,
  },
  {
    path: "/new-greeting",
    element: <Home />,
  },
  {
    path: "/greeting-list",
    element: <Home />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import First from "./pages/First";
import Letter from "./pages/Letter";
import Home from "./pages/Home";
import Couple from "./pages/Couple";
import Family from "./pages/Family";
import Date from "./pages/Date";
import Greetings from "./pages/Greetings";

import MainMenu from "./layouts/MainMenu";
import NewGreeting from "./pages/NewGreeting";
import Experiment from "./pages/Experiment";
import NotAttend from "./pages/NotAttend.jsx";
import SendGift from "./pages/SendGift.jsx";

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
      {
        path: "/greetings",
        element: <Greetings />,
      },
    ],
  },
  {
    path: "/new-greeting",
    element: <NewGreeting />,
  },
  {
    path: "/not-attend",
    element: <NotAttend />,
  },
  {
    path: "/send-gift",
    element: <SendGift />,
  },
  {
    path: "/experiment",
    element: <Experiment />,
  },
]);

export default router;

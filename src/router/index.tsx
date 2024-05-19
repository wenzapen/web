import { createBrowserRouter } from "react-router-dom";
import Tom from "../pages/tom";
import Bill from "../pages/bill";
import Team1 from "../pages/team1";
import Team2 from "../pages/team2";
import Login from "../pages/login";
import MyLayout from "../pages/MyLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      {
        path: "user/bill",
        element: <Bill />,
      },
      {
        path: "user/tom",
        element: <Tom />,
      },
      {
        path: "team/team1",
        element: <Team1 />,
      },
      {
        path: "team/team2",
        element: <Team2 />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

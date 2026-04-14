import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import friendDetails from "../Pages/friendDetails/friendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/friendDetails/:friendId",
        Component: friendDetails,
        loader: () => fetch("/friendsData.json"),
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

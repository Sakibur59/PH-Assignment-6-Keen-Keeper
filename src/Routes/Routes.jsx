import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{
        index:true,
        Component:HomePage,
    },
    {
        path:'/timeline',
        element:<Timeline></Timeline>
    },
    {
        path:'/stats',
        element:<Stats></Stats>
    }
],
    // errorElement:<ErrorPage></ErrorPage>
  },
]);
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import DeveloperList from "../components/DeveloperList";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/developList',
          element: <DeveloperList></DeveloperList>
        }
      ]
    }
   
  ]);

  export default router;
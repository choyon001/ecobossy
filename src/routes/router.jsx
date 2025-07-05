import { createBrowserRouter } from "react-router-dom";
import HomeLayout from './../layouts/HomeLayout';
import Main from "../components/pages/Main";
import ErrorPage from "../components/ErrorPage";
import ExploreMore from './../components/ExploreMore';
import PrivateRoute from "./PrivateRoute";
import Auth from "../components/pages/Auth";
import Login from "../components/Login";
import Register from "../components/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path: "/",
            element: <Main></Main>,
            loader:()=>fetch("/adventures.json")
        },
        {
          path:"/explore/:id",
          element:<PrivateRoute><ExploreMore></ExploreMore></PrivateRoute>,
          loader: ()=>fetch(`/adventures.json`)
          
        }
    ]
  },
  {
    path:"auth",
    element:<Auth></Auth>,
    children:[
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;
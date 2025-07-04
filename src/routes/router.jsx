import { createBrowserRouter } from "react-router-dom";
import HomeLayout from './../layouts/HomeLayout';
import Main from "../components/pages/Main";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path: "/",
            element: <Main></Main>,
            loader:()=>fetch("../../public/advenures.json")
        }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;
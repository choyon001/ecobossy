import { createBrowserRouter } from "react-router-dom";
import HomeLayout from './../layouts/HomeLayout';
import Main from "../components/Main";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path: "/",
            element: <Main></Main>
        }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;
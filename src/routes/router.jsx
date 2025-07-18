import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./../layouts/HomeLayout";
import Main from "../components/pages/Main";
import ErrorPage from "../components/ErrorPage";
import ExploreMore from "./../components/ExploreMore";
import PrivateRoute from "./PrivateRoute";
import Auth from "../components/pages/Auth";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgotPassword";
import ProfileSection from "../components/ProfileSection";
import UpdateProfile from "../components/UpdateProfile";
import ReviewForm from "../components/ReviewForm";
import TalkWithExpert from "../components/TalkWithExpert";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/explore/:id",
        element: (
          <PrivateRoute>
            <ExploreMore></ExploreMore>
          </PrivateRoute>
        ),
        loader: () => fetch(`/adventures.json`),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfileSection></ProfileSection>
          </PrivateRoute>
        ),
      },
      {
        path: "updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "review",
        element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
      },
      {
        path: "talkExpert",
        element: <PrivateRoute><TalkWithExpert></TalkWithExpert></PrivateRoute>,
      },
      {
        path:"/about",
        element:<About></About>
      }
    ],
  },
  {
    path: "auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

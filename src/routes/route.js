import App from "../App";
import Register from "../pages/Register";
import DetailVideo from "../pages/DetailVideo";
import ProfileUser from "../pages/ProfileUser";
import AddRecipe from "../pages/AddRecipe";
import DetailRecipe from "../pages/DetailRecipe";
import LandingPage from "../pages/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import Halaman from "../pages/Halaman";
import Login from "../pages/Login";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailRecipe />,
  },
  {
    path: "/profile",
    element: <ProfileUser />,
  },
  {
    path: "/add",
    element: <AddRecipe />,
  },
  {
    path: "/video",
    element: <DetailVideo />,
  },
  {
    path: "/halaman",
    element: <Halaman />,
  },
  {
    path: "/refactory",
    element: <App />,
  },
]);

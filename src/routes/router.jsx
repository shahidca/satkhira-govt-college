import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AboutPage from "../Pages/About/AboutPage";
import Science from "../components/Groups/Sciences/Science";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true, element: <Home></Home>
        },
        {
          path: "/about", element: <AboutPage></AboutPage>
        },
        {
          path: "/groups/science", element: <Science></Science>
        }
    ]   
  },
]);

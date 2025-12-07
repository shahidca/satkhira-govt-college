import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AboutPage from "../Pages/About/AboutPage";
import Science from "../components/Groups/Sciences/Science";
import Humanities from "../components/Groups/Humanities/Humanities";
import Commerce from "../components/Groups/Commerce/Commerce";
import ContactPage from "../Pages/Contact/ContactPage";

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
        path: "/contact", element: <ContactPage></ContactPage>
      },
      {
        path: "/groups/science", element: <Science></Science>
      },
      {
        path: "/groups/humanities", element: <Humanities></Humanities>
      },
      {
        path: "/groups/commerce", element: <Commerce></Commerce>
      }
    ]
  },
]);

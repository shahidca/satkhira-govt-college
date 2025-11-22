import { Outlet } from "react-router";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";

export default function Root() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

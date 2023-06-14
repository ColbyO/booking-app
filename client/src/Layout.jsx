import Header from "./Header"
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-black bg-darkPrimary dark:text-white">
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout
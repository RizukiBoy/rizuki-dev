import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "./Contact"
export default function Layout() {
    return (
        <div>
            <Navbar />
            <div className="pt-16 w-full">
            <Outlet />
            </div>
            <Contact />
        </div>  
    )
}
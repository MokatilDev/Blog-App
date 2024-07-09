import { Link } from "react-router-dom"

// images
import logo from "../assets/logo.svg"


function NavBar() {
    return (
        <header className=" mx-auto w-full">
            <nav className="flex justify-between items-center py-3 container mx-auto border-b border-main">
                <div className="flex justify-center items-center">
                    <img src={logo} width={60} height={60} alt="ByteBlogger" />
                    <h1 className="font-bold">ByteBlogger</h1>
                </div>

                <ul className="flex justify-center items-center gap-5">
                    <Link to={"/"} className="flex gap-1 justify-center items-center">
                        Home
                    </Link>

                    <Link to={"/articles"} className="flex gap-1 justify-center items-center">
                        Articles
                    </Link>

                    <Link to={"/categories"} className="flex gap-1 justify-center items-center">
                        Categories
                    </Link>

                    <Link to={"/contact"} className="flex gap-1 justify-center items-center">
                        Contact
                    </Link>
                </ul>

                <div className="flex gap-2 justify-center items-center">
                    <Link className=" bg-mainButton border border-main font-medium py-2 px-5" to={"sign-up"}>
                        Sign Up
                    </Link>

                    <Link className=" bg-white border text-black font-medium py-2 px-5" to={"sign-in"}>
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
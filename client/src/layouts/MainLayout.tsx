import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function MainLayout() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
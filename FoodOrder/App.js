import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
import { UserProvider } from "./utils/Context/UserContext"
import { RestaurantApiProvider } from "./utils/Context/RestaurantsApiContext"
import MainContext from "./utils/Context/MainContext"

const App=()=>{
    return (
        // Global state managment using useContext
            <MainContext>
            <div className="app">
            <Header/>
            {/* Outlet will replace the with respective child component  */}
            <Outlet/>
        </div>
        </MainContext>
        
    )
}
export default App
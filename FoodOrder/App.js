import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
import { UserProvider } from "./utils/Context/UserContext"

const App=()=>{
    return (
        // Global state managment using useContext
        <UserProvider>  
            <div className="app">
            <Header/>
            {/* Outlet will replace the with respective child component  */}
            <Outlet/>
        </div>
        </UserProvider>
    )
}
export default App
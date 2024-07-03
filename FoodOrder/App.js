import BodyComponent from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

const App=()=>{
    return (
        <div className="app">
            <Header/>
            <BodyComponent/>
             {/* <Footer/> */}
        </div>
    )
}
export default App
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./utils/Context/UserContext";
import { RestaurantApiProvider } from "./utils/Context/RestaurantsApiContext";
import MainContext from "./utils/Context/MainContext";
import { Provider } from "react-redux";
import cartStore from "./utils/Store/CartStore";

const App = () => {
  return (
    // Global state managment using useContext
    <Provider store={cartStore}>
      <MainContext>
        <div className="app">
          <Header />
          {/* Outlet will replace the with respective child component  */}
          <Outlet />
        </div>
      </MainContext>
    </Provider>
  );
};
export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../Components/AboutUs";
import BodyComponent from "../Components/Body";
import ContactUs from "../Components/ContactUs";
import Error from "../Components/ErrorHandle";
import RestaurantMenuCard from "../Components/RestaurantMenuCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenuCard/>
      }
    ],
    errorElement:<Error/>
  }
]);

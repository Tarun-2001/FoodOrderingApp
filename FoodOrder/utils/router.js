import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../Components/AboutUs";
import BodyComponent from "../Components/Body";
const ContactUs = lazy(()=>{return import("../Components/ContactUs")})
import Error from "../Components/ErrorHandle";
import RestaurantMenuCard from "../Components/RestaurantMenuCard";
import { lazy, Suspense } from "react";
import ClassComponent from "../Components/classComponent";
import DummyMenu from "./MockData/DummyMenu";
import Cart from "../Components/Cart";

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
        element: <Suspense fallback={<h1>Suspence fallback loading contact Us!!!</h1>}> <ContactUs /></Suspense>,
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenuCard/>
      },
      {
        path:'/classComponent',
        element:<ClassComponent/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
]);

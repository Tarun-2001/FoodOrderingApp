import React from "react";
import { UserProvider } from "./UserContext";
import { RestaurantApiProvider } from "./RestaurantsApiContext";

const MainContext = (props) => {
  const providers = [UserProvider, RestaurantApiProvider];

  //   return (
  //     <UserProvider>
  //         <RestaurantApiProvider>
  //             {props.children}
  //         </RestaurantApiProvider>
  //     </UserProvider>
  //   );

  // The below interation will build a strcuture which looks like above nested providers. 

  return providers.reduce((accumulator,CurentProvider)=>{
        return (
            <CurentProvider>
                {accumulator}
            </CurentProvider>
        )
    },props.children)
};

export default MainContext;

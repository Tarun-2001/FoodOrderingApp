import { createContext } from "react";
import { useRestaurants } from "../CustomHooks/useRestaurants";
import { getCache, setCache } from "../caching/RestaurantApiCache";

export const RestaurantApi = createContext();

export const RestaurantApiProvider = (props) => {
  let restaurants = getCache("restaurants");
  if (restaurants||restaurants?.data?.length!=0){
    restaurants = useRestaurants();
    setCache("restaurants",restaurants)
  }

  return (
  <RestaurantApi.Provider value={{restaurants}}>
    {props.children}
    </RestaurantApi.Provider>);
};

import { useEffect, useState } from "react";
export const useRestaurants = () => {
    
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    handlePromise();
  }, []);

  const handlePromise = async () => {

    const fetchRestaurents = await fetch('http://localhost:3000/swiggy/restaurant')
    const res = await fetchRestaurents.json()
    let restaurantArray = res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    let fetchMoreRestaurants = await fetch('http://localhost:3000/swiggy/getMorerestaurant')
    fetchMoreRestaurants = await fetchMoreRestaurants.json()
    fetchMoreRestaurants = fetchMoreRestaurants.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants
    restaurantArray = [...restaurantArray,...fetchMoreRestaurants]
    setRestaurants(restaurantArray);
  };

  return restaurants;
};

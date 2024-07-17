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
    let fetchMoreRestaurants2 = await fetch('http://localhost:3000/swiggy/update')
    fetchMoreRestaurants2 = await fetchMoreRestaurants2.json()
    fetchMoreRestaurants2 = fetchMoreRestaurants2.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    restaurantArray = [...restaurantArray,...fetchMoreRestaurants2]
    setRestaurants(restaurantArray);
  };

  return restaurants;
};

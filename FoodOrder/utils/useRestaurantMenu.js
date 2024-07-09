import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuObject, setMenuObj] = useState(null);
  useEffect(() => {
    handleRestaurantMenu();
  }, []);

  const handleRestaurantMenu = async () => {
    let menuCard = await fetch(`http://localhost:3000/swiggy/restaurantMenu/${resId}`);
    menuCard = await menuCard.json();
    setMenuObj(menuCard)
  };
  return menuObject;
};

export default useRestaurantMenu;

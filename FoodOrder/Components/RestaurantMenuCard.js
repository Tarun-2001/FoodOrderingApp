import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUI";
import DummyMenu from "../utils/DummyMenu";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const menuObj = useRestaurantMenu(resId);

  if (menuObj === null) return <ShimmerUi />;

  const {itemCards} = menuObj?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
  const name = menuObj?.data?.cards?.[0]?.card?.card?.text

  if(itemCards===undefined||itemCards===null){
    return <DummyMenu/>
  }

  return (
    <div>
      <h1>{name} - Menu items!!!</h1>
      <ul>
        <li>
          {itemCards.map((obj) => (
            <li key={obj?.card?.info?.id}>{obj?.card?.info?.name}</li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;

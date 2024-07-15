import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/CustomHooks/useRestaurantMenu.js";
import ShimmerUi from "./ShimmerUI";
import MenuItems from "./RestaurantMenu.js";
import { dummyMenuItem } from "../utils/mockData.js";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  let menuObj = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menuObj === null) return <ShimmerUi />;

  const { itemCards } =
    menuObj?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;
  if (itemCards === undefined || itemCards === null) {
    menuObj = {...dummyMenuItem}
  }

  const name = menuObj?.data?.cards?.[0]?.card?.card?.text;
  const category =
    menuObj.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div>
      <h1 style={{ "text-align": "center" }}>{name} - Menu items!!!</h1>
      {category.map((ele, ind) => (
        // Controlled Component
        <MenuItems
          key={ele.card.card.title}
          data={ele}
          showItems={true && ind === showIndex}
          setShowIndex={() =>
            ind === showIndex ? setShowIndex(null) : setShowIndex(ind)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenuCard;

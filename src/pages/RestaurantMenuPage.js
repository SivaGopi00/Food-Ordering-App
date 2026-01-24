import { useEffect, useState } from "react";
import ItemsCard from "../ItemsCard";
import Shimmer from "../Shimmer";

const RestaurantMenuPage = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  //use shimmer ui also
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456"
    );
    const json = await data.json();
    const restaurantData = json.data;
    // console.log(restaurantData);

    setMenuInfo(restaurantData);
    // console.log(json);

    // const { itemCards } =
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    // console.log(itemCards);
    // console.log(menuInfo);
  };
  if (menuInfo === null) {
    return <Shimmer />;
  }
  console.log(menuInfo);
  const { name, avgRating, cuisines, costForTwo } =
    menuInfo?.cards[2]?.card?.card?.info || null;
  // console.log(name);
  const itemCards =
    menuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;

  console.log(itemCards);
  return (
    <div className="restaurantmenupage">
      <div className="resdetails">
        <h5>{name}</h5>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
      <div>
        <ul>
          {itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenuPage;

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Swiggy_Body_Api_URL } from "../Utils/constants";
const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_Body_Api_URL);
    const json = await data.json();
    const resInfo =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setResInfo(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log(resInfo);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {resInfo.map((res) => {
          return (
            <RestaurantCard
              key={res.info.id}
              cloudinary_Img={res.info.cloudinaryImageId}
              name={res.info.name}
              avgRating={res.info.avgRating}
              cuisines={res.info.cuisines.join(", ")}
              deliveryTime={res.info.sla[0]}
              costForTwo={res.info.costForTwo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

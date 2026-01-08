import { Restaurant_IMG_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        src={Restaurant_IMG_URL + "" + props.cloudinary_Img}
        alt="resimage"
        className="resimage"
      />
      <h4>{props.name}</h4>
      <h4>{props.avgRating}</h4>
      <h4>{props.cuisines}</h4>
      <h4>{props.deliveryTime}</h4>
      <h4>{props.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

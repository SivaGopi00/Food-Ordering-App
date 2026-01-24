const ItemsCard = () => {
  return (
    <div className="cuisinecard">
      <div className="dishcontainer">
        <h3>Dish name</h3>
        <h4>cost in Rs</h4>
        <h5>Rating</h5>
        <h4>Restaurant cuisines</h4>
      </div>
      <div className="cuisineimagecontainer">
        <img
          className="cuisineimage"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
        />
      </div>
    </div>
  );
};
export default ItemsCard;

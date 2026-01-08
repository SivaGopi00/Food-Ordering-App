const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        <div className="res-card">
          <img src="null" alt="resimage" />
          <h4>ResName</h4>
          <h4>Rating</h4>
          <h4>cuisines</h4>
          <h4>deliverytime</h4>
          <h4>cost for two</h4>
        </div>
      </div>
    </div>
  );
};

export default Body;

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOvjazQo3iSjjvTzg4pOV0bJnozGGyUMylw&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>RestaurantMenu</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

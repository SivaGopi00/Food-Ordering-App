import { Logo_URL } from "../Utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo_URL} />
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

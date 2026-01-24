import { Logo_URL } from "../Utils/constants";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>AboutUs</li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Grocery</li>
          <li>
            <Link to="/restaurants">RestaurantMenu</Link>
          </li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

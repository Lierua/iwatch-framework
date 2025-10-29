import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const Nav = () => {
  return (
    <div className="nav">
      <FaApple />
      <nav>
        <ul>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>iWatch</li>
          <li>Support</li>
        </ul>
      </nav>
      <div className="search-bag">
        <CiSearch />
        <PiShoppingBagOpenThin />
      </div>
    </div>
  );
};

export default Nav;

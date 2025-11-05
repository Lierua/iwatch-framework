"use client";

import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { useState } from "react";

const Nav = () => {
  const stored = "iWatch";
  const [active, setActive] = useState(stored);

  return (
    <div className="nav">
      <FaApple />
      <nav>
        <ul data-active={active}>
          {["Mac", "iPhone", "iPad", "iWatch", "Support"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={active === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
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

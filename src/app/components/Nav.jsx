"use client";

import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { useState } from "react";

const Nav = () => {
  
  const stored = "iWatch"
  const [active, setActive] = useState(stored);


  return (
    <div className="my-12 mx-auto w-[1200px] flex justify-between content-center">
      <FaApple className="scale-[3]" />
      <nav>
        <ul className="flex w-[640px] justify-between" data-active={active}>
          {["Mac", "iPhone", "iPad", "iWatch", "Support"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`text-[1.5rem] font-[400] py-1 px-4 rounded-[100px] transition-all duration-300 ease 
                ${active === item ? "bg-white text-bg-color" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:h-full after:w-[2px] after:bg-white after:z-0
      flex gap-16 relative [&>*]:h-8 [&>*]:w-8">
        <CiSearch />
        <PiShoppingBagOpenThin />
      </div>
    </div>
  );
};

export default Nav;

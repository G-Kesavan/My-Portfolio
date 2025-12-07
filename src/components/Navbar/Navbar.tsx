"use client";
import NavBtns from "./NavBtns";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { useState } from "react";
import NavMenu from "./NavMenue";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <nav className="w-[90%] md:w-[80%] lg:md:w-[70%] rounded-full p-1 flex justify-between fixed ml-[5%] mt-4 md:ml-[10%] lg:ml-[15%] text-blue-950">
        <NavLogo />
        <NavLink />
        <NavBtns setIsMenu={setIsMenu} />
      </nav>
      <NavMenu setIsMenu={setIsMenu} isMenu={isMenu}/>
    </>
  );
}

"use client";
import { GrClose } from "react-icons/gr";
import NavButtons from "./NavButtons";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { useState } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <nav className="w-[90%] md:w-[80%] lg:md:w-[70%] rounded-full p-1 flex justify-between fixed ml-[5%] mt-4 md:ml-[10%] lg:ml-[15%]">
        <NavLogo />
        <NavLink />
        <NavButtons setIsMenu={setIsMenu} />
      </nav>
      <menu
        className={`${
          isMenu ? "flex" : "hidden"
        } side-menu reletive h-[60vh] w-[40vw] justify-center items-end fixed  flex-col right-0 top-[15vh] bg-blue-950 z-30 rounded-l-[120px]`}
      >
        <button
          onClick={() => setIsMenu(false)}
          className="text-white m-6 absolute top-0 right-0 cursor-pointer"
        >
          <GrClose />
        </button>
        <a
          href="#hero"
          className="text-white m-2 mr-6 hover:border-b-2 hover:border-white"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white m-2 mr-6 hover:border-b-2 hover:border-white"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-white m-2 mr-6 hover:border-b-2 hover:border-white"
        >
          Projects
        </a>
        <a
          href="#certificates"
          className="text-white m-2 mr-6 hover:border-b-2 hover:border-white"
        >
          Certificates
        </a>
        <a
          href="#contact"
          className="text-white m-2 mr-6 hover:border-b-2 hover:border-white"
        >
          Contact
        </a>
      </menu>
    </>
  );
}

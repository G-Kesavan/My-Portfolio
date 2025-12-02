"use client";
type NavMenuProps = {
  isMenu: boolean;
  setIsMenu: (value: boolean) => void;
};
import { MdClose } from "react-icons/md";

export default function NavMenu({ isMenu, setIsMenu }: NavMenuProps) {
  return (
    <menu
      className={`${
        isMenu ? "flex" : "hidden"
      } side-menu reletive h-[60vh] w-[40vw] justify-center items-end fixed  flex-col right-0 top-[15vh] bg-blue-950 z-30 rounded-l-[120px] text-lg`}
    >
      <button
        onClick={() => setIsMenu(false)}
        className="text-white m-6 absolute top-0 right-0 cursor-pointer"
      >
        <MdClose size={30} />
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
  );
}

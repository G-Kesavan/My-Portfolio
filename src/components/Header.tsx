import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-light-blue-100 shadow-lg rounded-lg">
      <div className="text-3xl font-extrabold text-light-blue-600">
        My Portfolio
      </div>
      <div className="hidden md:flex space-x-6">
        <a
          href="#home"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Home
        </a>
        <a
          href="#contact"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Contact
        </a>
        <a
          href="#projects"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Skills
        </a>
        <a
          href="#extra"
          className="text-light-blue-600 hover:text-blue-800 transition duration-300"
        >
          Extra
        </a>
      </div>
      <div className="md:hidden">
        <button className="text-light-blue-600 hover:text-blue-800 transition duration-300">
          <i className="fas fa-bars"></i>
          {"menu"}
        </button>
      </div>
    </header>
  );
}

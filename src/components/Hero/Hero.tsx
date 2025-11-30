"use client";
import Image from "next/image";
import { MdPhone, MdStarBorder } from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaProjectDiagram,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Hero() {
  const navigate = useRouter();
  return (
    <section
      id="hero"
      className="md:max-h-screen min-h-screen p-8 pt-24 flex flex-col-reverse md:flex-row items-center justify-end md:justify-center overflow-hidden"
    >
      <div className="md:w-[50%] m-1 flex flex-col gap-4">
        <strong className="flex md:justify-start justify-center items-center text-lg font-normal mt-3">
          WELCOME TO MY WORLD
          <i className="text-yellow-300">
            <MdStarBorder />
          </i>
        </strong>
        <h2 className="text-3xl flex font-bold items-end justify-center md:justify-start">
          Hi,I&apos;m <span className="text-2xl font-light">&ensp;Kesavan</span>
        </h2>
        <h1 className="text-4xl font-extrabold flex justify-center md:justify-start flex-wrap">
          <span className="text-blue-400">Fullstack&ensp;</span>Developer
        </h1>
        <p className="md:w-[80%] text-blue-200 flex justify-center flex-wrap h-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          aliquid eveniet vel sit doloremque voluptatum voluptates iure
          similique itaque eaque. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur, blanditiis.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-7 text-blue-200 flex-wrap mt-3 ">
          <a href="" className="flex spin-effect-sm relative hover-effect">
            <i className="p-2 rounded-full z-1 bg-blue-950 text-white">
              <FaLinkedin size={30} />
            </i>
          </a>

          <a href="" className="flex spin-effect-sm relative hover-effect">
            <i className="p-2 rounded-full z-1 bg-blue-950 text-white">
              <FaFacebook size={30} />
            </i>
          </a>
          <a href="" className="flex spin-effect-sm relative hover-effect">
            <i className="p-2 rounded-full z-1 bg-blue-950 text-white">
              <FaInstagram size={30} />
            </i>
          </a>
          <a href="" className="flex spin-effect-sm relative hover-effect">
            <i className="p-2 rounded-full z-1 bg-blue-950 text-white">
              <FaTelegram size={30} />
            </i>
          </a>
        </div>
      </div>

      <div className="spin-effect-lg relative rounded-3xl h-[55vh] md:h-[60vh] lg:h-[65vh] w-auto">
        <Image
          src="/images/profile.png"
          alt="profile"
          width="100"
          height="100"
          className="h-full w-auto profile-img rounded-3xl"
        />

        <div className="flex-col w-40 absolute right-0 bottom-0">
          <button
            onClick={() => {
              navigate.push("#contact");
            }}
            className="hero-resume w-40 h-30 bg-blue-950 text-white flex flex-col cursor-pointer hover:text-green-500"
          >
            <i className="p-1 border rounded-2xl">
              <MdPhone size={20} />
            </i>
            <span className="text-[17px]">Contact</span>
          </button>
          <button
            onClick={() => {
              navigate.push("#projects");
            }}
            className="hero-projects w-40 h-30 bg-blue-950 text-white flex flex-col cursor-pointer hover:text-green-500"
          >
            <i>
              <FaProjectDiagram size={16} />
            </i>
            <span className="text-[17px]">Projects 8</span>
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "EMarket (MERN)",
      tech: "Tailwind, ReactJS, Redux, ExpressJS, MongooDB",
      desc: "Built a Netflix-like UI with ReactJS featuring dynamic content display.",
      img: "/images/projects/Netflix.png",
      link: "https://project-netflix-copy.web.app/",
      code: "https://github.com/G-Kesavan/Netflix-clone",
    },
    {
      title: "Notes (MERN)",
      tech: "Tailwind, ReactJS, ExpressJS, MongooDB",
      desc: "Built a Netflix-like UI with ReactJS featuring dynamic content display.",
      img: "/images/projects/Netflix.png",
      link: "https://project-netflix-copy.web.app/",
      code: "https://github.com/G-Kesavan/Netflix-clone",
    },
    {
      title: "Netflix Clone (ReactJS)",
      tech: "ReactJS, Redux, FireBase",
      desc: "Built a Netflix-like UI with ReactJS featuring dynamic content display.",
      img: "/images/projects/Netflix.png",
      link: "https://project-netflix-copy.web.app/",
      code: "https://github.com/G-Kesavan/Netflix-clone",
    },
    {
      title: "Portfolio (ReactJS)",
      tech: "ReactJS",
      desc: "Created a responsive personal portfolio with project showcase.",
      img: "/images/projects/Portfolio.png",
      link: "https://mr-kesavan.web.app",
      code: "https://github.com/G-Kesavan/Portfolio",
    },
    {
      title: "To Do List (ReactJs)",
      tech: "ReactJS",
      desc: "Developed a to-do list app with add, delete, and status toggle functions.",
      img: "/images/projects/Notes.png",
      link: "https://your-todo-list-link.com",
      code: "https://github.com/G-Kesavan/React-handle",
    },
    {
      title: "Landing Page (DOM)",
      tech: "HTML, CSS",
      desc: "Designed a static shopping page layout with modern responsive design.",
      img: "/images/projects/empty.png",
      link: "https://your-shopping-page-link.com",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Landing%20page",
    },
    {
      title: "Portfolio (DOM)",
      tech: "HTML, CSS",
      desc: "Built a simple personal portfolio using pure HTML and CSS.",
      img: "/images/projects/PortfolioDOM.png",
      link: "https://portfolio-dom.web.app/",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Portfolio",
    },
    {
      title: "Calculator (DOM)",
      tech: "HTML, CSS, JavaScript",
      desc: "Built a functional calculator with basic operations using JavaScript.",
      img: "/images/projects/empty.png",
      link: "https://your-calculator-link.com",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Calculator",
    },
  ];

  const [projectNo, setProjectNo] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const setAnimation = () => {
    setIsAnimation(true);
    setTimeout(() => {
      setIsAnimation(false);
    }, 1000);
  };

  return (
    <section
      id="projects"
      className="md:h-screen min-h-screen p-8 pt-20 bg-blue-100 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-8 flex justify-center w-full items-center">
        Projects
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:h-[45vh] md:w-9/10 lg:w-8/10 mb-12 ">
        <div
          className={`${
            isAnimation ? "project-chang-effect" : null
          } md:w-5/10 min-h-[40vh] relative spin-effect-sm m-3 flex justify-center shadow-[0px_0px_12px_5px] shadow-blue-200 rounded-2xl`}
        >
          <Image
            src={projects[projectNo].img}
            alt={projects[projectNo].title}
            width={500}
            height={500}
            loading="eager"
            className="w-full object-cover rounded-2xl relative border-amber-50 project-img"
          />
        </div>
        <div
          className={`${
            isAnimation ? "project-chang-effect" : null
          }  p-4 rounded-2xl md:w-5/10 md:pt-0 flex flex-col items-center justify-center`}
        >
          <strong className="text-2xl text-blue-50 font-extrabold">  
            {projects[projectNo].title}
          </strong>
          <p className="text-lg mt-2">Use Tech : {projects[projectNo].tech}</p>
          <p className="mt-1 text-blue-200 md:line-clamp-6 text-justify">
            Details : {projects[projectNo].desc} Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio maiores animi vitae repellat,
            dolores omnis minima dolore optio distinctio numquam, sed suscipit
          </p>
          <div className="flex gap-8 mt-4">
            <button className="hover-effect spin-effect-sm relative flex gap-2 items-center justify-center rounded-full">
              <p className="z-1 flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 rounded-2xl">
                <i>
                  <SiGithub size={20} />
                </i>
                Code
              </p>
            </button>
            <button className="hover-effect spin-effect-sm relative flex gap-2 items-center justify-center rounded-full">
              <p className="z-1 flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 rounded-2xl">
                <i>
                  <FaEye size={20} />
                </i>
                Live
              </p>
            </button>
          </div>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={"horizontal"}
        className=" w-9/10 md:w-7/10 lg:w-6/10"
      >
        <CarouselContent className="h-full w-full">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              onClick={() => {
                setProjectNo(index);
                setAnimation();
              }}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4  min-h-full"
            >
              <div className="flex flex-col p-0.5 relative w-full h-full rounded-2xl hover-project cursor-pointer overflow-hidden ">
                <Image
                  src={project.img}  
                  alt={project.title}
                  width={200}
                  height={200}
                  loading="eager"
                  className="w-full h-full object-fill shadow-[0px_0px_2px_1px] shadow-blue-50 rounded-2xl"
                />
                <div className="project-name absolute bottom-0.5 right-0.5 w-7/10 h-6/10 bg-blue-950 items-center p-1.5 text-center rounded-tl-2xl rounded-br-2xl hidden">
                  <span className="text-white">{project.title}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size={"sm"}
          className="text-white bg-blue-950 border-blue-950 shadow-[0px_0px_2px_1px] shadow-blue-50"
        />
        <CarouselNext
          size={"sm"}
          className="text-white bg-blue-950 border-blue-950 shadow-[0px_0px_2px_1px] shadow-blue-50"
        />
      </Carousel>
    </section>
  );
}

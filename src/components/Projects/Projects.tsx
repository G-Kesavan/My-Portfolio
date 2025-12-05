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
          } md:w-5/10 relative spin-effect-lg m-3 flex justify-center `}
        >
          <Image
            src={projects[projectNo].img}
            alt={projects[projectNo].title}
            width={500}
            height={500}
            loading="eager"
            className="  w-full h-full object-cover rounded-3xl relative border-amber-50 "
          />
        </div>
        <div
          className={`${
            isAnimation ? "project-chang-effect" : null
          }  p-4 rounded-2xl md:w-5/10 md:pt-0`}
        >
          <strong className="text-2xl">
            Project Name : {projects[projectNo].title}
          </strong>
          <p className="text-lg mt-2">Use Tech : {projects[projectNo].tech}</p>
          <p className="mt-1 text-blue-200">
            Details : {projects[projectNo].desc} Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio maiores animi vitae repellat,
            dolores omnis minima dolore optio distinctio numquam, sed suscipit
          </p>
          <div className="flex gap-4 mt-2">
            <button className="flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 border rounded-full">
              <i>
                <SiGithub size={20} />
              </i>
              Code
            </button>
            <button className="flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 border rounded-full">
              <i>
                <FaEye size={20} />
              </i>
              Live
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
              className="basis-1/2 md:basis-1/4 lg:basis-1/5  min-h-full"
            >
              <div className="flex flex-col relative w-full h-full rounded-2xl hover-project cursor-pointer overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={200}
                  height={200}
                  onClick={() => {
                    setProjectNo(index);
                    setAnimation();
                  }}
                  loading="eager"
                  className="w-full h-full object-fill rounded-2xl border-2 border-blue-950"
                />
                <div className="project-name hidden animate-collapsible-down absolute bottom-0 left-0 z-20 w-full h-fit bg-blue-950 items-center p-1 text-center rounded-b-2xl">
                  <strong className="text-white">{project.title}</strong>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size={"lg"}
          className="text-white bg-blue-950 border-blue-950 "
        />
        <CarouselNext
          size={"lg"}
          className="text-white bg-blue-950 border-blue-950 "
        />
      </Carousel>
    </section>
  );
}

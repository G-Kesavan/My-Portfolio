"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

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
      img: "/images/projects/empty.jpg",
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

  return (
    <section
      id="projects"
      className="md:h-screen min-h-screen p-8 pt-20 bg-blue-100 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full items-center">
        Projects
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={"horizontal"}
        className="md:w-8/10 md:h-[60vh] mb-20 w-full"
      >
        <CarouselContent className="h-full">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/1 lg:basis-1/2 h-full"
            >
              <div className=" rounded-3xl flex flex-col h-[60vh] ] md:h-full relative border-6 border-effect overflow-hidden bg-blue-950">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={100}
                  height={100}
                  loading="eager"
                  className=" w-auto object-cover project-img"
                />
                <div className="project-description absolute bottom-0 left-0 w-full flex flex-col items-center">
                  <div className="project-header flex items-center justify-between ml-auto bg-blue-950 ">
                    <a
                      href={project.code}
                      className="flex items-center ml-12 overflow-auto  text-nowrap mr-3 font-bold"
                    >
                      {project.title}
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center mr-4 cursor-pointer hover-effect font-bold hover:text-green-400"
                    >
                      Live&ensp;
                      <FaEye size={20} />
                    </a>
                  </div>

                  <div className="project-content bg-blue-950 w-full ">
                    <p className="p-2 pb-0 ml-2 mr-2 line-clamp-3 overflow-hidden font-light">
                      <span className="font-normal">Use Tech : </span>
                      {project.tech}.
                    </p>
                    <p className="p-2 pb-0 ml-2 mr-2 line-clamp-3 overflow-hidden font-light">
                      {project.desc}
                    </p>
                  </div>
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

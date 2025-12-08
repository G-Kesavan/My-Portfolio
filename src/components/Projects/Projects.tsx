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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "EMarket (MERN)",
      tech: "Tailwind, ReactJS, Redux, NodeJs, ExpressJS, MongooDB",
      desc: "I engineered a secure, full-stack eCommerce application using the MERN stack, Razorpay payment integration, cart and checkout features, and a responsive user interface. •	Implemented JWT authentication with login, signup, and logout functionality.  •	Added fully customized product and review management (add, update, delete) using a separate admin panel.",
      img: "/images/projects/emarket.png",
      link: "https://project-emarket.web.app/",
      code: "https://github.com/G-Kesavan/ECommerce-Web-Backend",
    },
    {
      title: "Notes (MERN)",
      tech: "Tailwind, ReactJS, ExpressJS, NodeJs MongooDB",
      desc: "I engineered a secure, full-stack note-taking app using the MERN stack, incorporating JWT authentication, CRUD features, and a responsive user interface. Implemented JWT authentication with login, signup, and logout functionality. Added full CRUD features: create, update, delete, and manage notes. ",
      img: "/images/projects/noteapp.png",
      link: "https://mern-notes-project.web.app/",
      code: "https://github.com/G-Kesavan/Notes-App-Frontend",
    },
    {
      title: "Netflix Clone (ReactJS)",
      tech: "ReactJS, Redux, FireBase, redux",
      desc: "Developed a Netflix clone with React.js and Redux for state management, integrating TMDB API and Firebase authentication for a seamless streaming experience.Implemented Firebase Authentication for secure sign-in/sign-out. Integrated TMDB REST API with Axios to fetch and display movies/TV shows. Designed a dynamic, responsive UI resembling the original Netflix platform ",
      img: "/images/projects/netfilex.png",
      link: "https://project-netflix-copy.web.app/",
      code: "https://github.com/G-Kesavan/Netflix-clone",
    },
    {
      title: "Portfolio (ReactJS)",
      tech: "ReactJS, css3, javasrip, Firebase Store",
      desc: "Created a modern, responsive portfolio website with React.js, enhanced with Three.js animations and real-time Firebase Firestore integration. Integrated Three.js for a 3D background and animated skill bars.Connected Firebase Firestore for real-time contact form submissions. Implemented React Router and additional features like copy-to-clipboard ",
      img: "/images/projects/portfolio1.png",
      link: "https://mr-kesavan.web.app/",
      code: "https://github.com/G-Kesavan/Portfolio",
    },
    {
      title: "To Do List (ReactJs)",
      tech: "ReactJS",
      desc: "Built a lightweight task management app in React.js with full CRUD functionality, localStorage persistence, and advanced search/filtering. Implemented full CRUD functionality with task search and completion toggles. Used localStorage for data persistence across sessions.  Designed a clean, responsive UI with interactive feedback. ",
      img: "/images/projects/todolist.png",
      link: "https://project-notes-copy.web.app/",
      code: "https://github.com/G-Kesavan/To-Do-List",
    },
    {
      title: "Portfolio (DOM)",
      tech: "HTML, CSS",
      desc: "Built a simple personal portfolio using pure HTML and CSS. Learn basices in Styles",
      img: "/images/projects/portfolio0.png",
      link: "https://portfolio-dom.web.app/",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Portfolio",
    },
    {
      title: "Landing Page (DOM)",
      tech: "HTML, CSS",
      desc: "Designed a static shopping page layout with modern responsive design.Learn basices in Styles",
      img: "/images/projects/landing.png",
      link: "none",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Landing",
    },
    {
      title: "Calculator (DOM)",
      tech: "HTML, CSS, JavaScript",
      desc: "Built a functional calculator with basic operations using JavaScript.Learn basices in Styles and javasrip functions",
      img: "/images/projects/calculater.png",
      link: "none",
      code: "https://github.com/G-Kesavan/CODSOFT/tree/main/CODSOFT_Calculator",
    },
    {
      title: "Portfolio (NextJS)",
      tech: "NextJS, Tailwind, shadcn Ui",
      desc: "Created a modern, responsive portfolio website using Next.js with TypeScript, enhanced with Three.js animations and real-time email integration using Nodemailer. Integrated Three.js to implement a 3D background and animated project bars. Built and connected a custom backend for real-time contact form submissions. Implemented the App Router and additional features such as copy-to-clipboard functionality ",
      img: "/images/projects/portfolio2.png",
      link: "https://mrkesavan.vercel.app",
      code: "https://github.com/G-Kesavan/My-Portfolio",
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
      className="md:h-screen min-h-screen p-8 pt-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-8 flex justify-center w-full items-center text-blue-50">
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
          <strong className="text-2xl font-extrabold text-white">
            {projects[projectNo].title}
          </strong>
          <p className="text-lg mt-2 text-justify text-blue-100">
            Use Tech :
            <span className="text-justify ">
              &ensp;{projects[projectNo].tech}
            </span>
          </p>
          <p className="mt-1  md:line-clamp-6 text-justify">
            Details : {projects[projectNo].desc} 
          </p>
          <div className="flex gap-8 mt-4 text-white">
            <a
              href={projects[projectNo].code}
              className="hover-effect spin-effect-sm relative flex gap-2 items-center justify-center rounded-full"
            >
              <p className="z-1 flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 rounded-2xl">
                <i>
                  <SiGithub size={20} />
                </i>
                Code
              </p>
            </a>
            <a
              href={
                projects[projectNo].link === "none"
                  ? "#project"
                  : projects[projectNo].link
              }
              className="hover-effect spin-effect-sm relative flex gap-2 items-center justify-center rounded-full"
            >
              <p className="z-1 flex gap-2 items-center justify-center p-2 pl-3 pr-3 bg-blue-950 rounded-2xl">
                <i>
                  {projects[projectNo].link === "none" ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </i>
                Live
              </p>
            </a>
          </div>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={"horizontal"}
        className=" w-7/10 lg:w-6/10"
      >
        <CarouselContent className="h-full w-full">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              onClick={() => {
                setProjectNo(index);
                setAnimation();
              }}
              className="basis-1/1 md:basis-1/3 lg:basis-1/4  min-h-full"
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

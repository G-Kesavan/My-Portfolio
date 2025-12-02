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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/1 lg:basis-1/2 h-full"
            >
              <div className=" rounded-3xl flex flex-col h-[60vh] ] md:h-full relative border-6 border-effect overflow-hidden bg-blue-950">
                <Image
                  src="/images/projects/Notes.png"
                  alt="profile"
                  width={100}
                  height={100}
                  loading="eager"
                  className=" w-auto object-cover project-img"
                />
                <div className="project-description absolute bottom-0 left-0 w-full flex flex-col items-center">
                  <div className="project-header flex items-center justify-between ml-auto bg-blue-950 ">
                    <strong className="flex items-center ml-12 overflow-auto text-nowrap mr-3">
                      Reactjs Portfolio
                    </strong>
                    <a className="flex items-center mr-4 cursor-pointer hover-effect font-bold hover:text-green-400">
                      Live&ensp;
                      <FaEye size={20} />
                    </a>
                  </div>

                  <div className="project-content bg-blue-950 ">
                    <p className="p-2 ml-2 mr-2 line-clamp-3 overflow-hidden font-light">
                      <span className="font-normal">Use Tech : </span>Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. Odio
                      debitis fugit iusto molestiae quaerat eaque.
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

"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FaEye } from "react-icons/fa";

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="md:h-screen  min-h-screen p-8 pt-20 bg-blue-100 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full items-center">
        Certifications
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={"horizontal"}
        className="md:w-8/10 w-full md:h-[60vh] mb-20"
      >
        <CarouselContent className="h-full ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full basis-1/1"
            >
              <div className="w-full rounded-3xl flex flex-col h-[60vh] ] md:h-full relative border-4 border-effect overflow-hidden bg-blue-950">
                <Image
                  src="/images/projects/Notes.png"
                  alt="profile"
                  width={100}
                  height={100}
                  loading="eager"
                  className="h-5/10 w-auto m-4 rounded-2xl hover-effect-y"
                />
                <div className=" w-auto mr-4 ml-4 h-5/10">
                  <strong className="flex justify-center">
                    AI Enhance & Development
                  </strong>
                  <p className="text-justify line-clamp-5 md:line-clamp-6 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit eum pariatur aperiam dolore molestiae aspernatur quo
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit eum pariatur aperiam dolore molestiae aspernatur
                  </p>
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

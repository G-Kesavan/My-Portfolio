"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";

export default function Certifications() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleSet = () => {
      setScreenWidth(window.innerWidth);
    };
    handleSet();
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
  }, []);
  const certificates = [
    {
      name: "Web Development Intership",
      image: "/images/certificates/certificate1.png",
      detail:
        "Completed virtual web development internship at CodSoft, gaining hands-on experience in ReactJS, HTML, CSS, JavaScript, and real-world frontend development.",
    },
    {
      name: "WORKSHOP PARTICIPATION",
      image: "/images/certificates/certificate2.png",
      detail:
        "Attended AI-enhanced web development workshop by Guha Industrial Solutions, learning to integrate AI, Web3, blockchain, and emerging technologies to build modern, intelligent, and decentralized websites.",
    },
    {
      name: "AI Foundations Associate",
      image: "/images/certificates/certificate3.png",
      detail:
        "Achieved AI Foundations Associate certification from Oracle, gaining foundational knowledge in artificial intelligence concepts, machine learning algorithms, and real-world AI applications for modern business solutions.",
    },
    {
      name: "Foundations Associate",
      image: "/images/certificates/certificate4.png",
      detail:
        "Achieved Oracle Foundations Associate certification, gaining a comprehensive understanding of core concepts, tools, and practices essential for building a strong foundation in technology and business solutions.",
    },
    {
      name: "Software Testing",
      image: "/images/certificates/certificate5.png",
      detail:
        "Completed a basic software testing course through Naan Mudhalvan by OpenMentor, gaining introductory knowledge of software quality concepts and fundamental testing principles used in development.",
    },
  ];

  return (
    <section
      id="certificates"
      className="md:h-screen  min-h-screen p-8 pt-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full items-center text-white">
        Certifications
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={screenWidth > 768 ? "horizontal" : "vertical"}
        className="md:w-9/10 lg:8/10 w-auto md:h-[60vh] h-[160vh] mb-20"
      >
        <CarouselContent className="h-full scrollbar-seting">
          {certificates.map((certificate, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full basis-1/4"
            >
              <div className="m-4 shadow-[0px_0px_6px_3px] shadow-blue-50 rounded-3xl flex flex-col h-auto md:h-[95%] relative overflow-hidden bg-blue-950">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  width={250}
                  height={250}
                  loading="eager"
                  className="h-5/10 w-auto m-4 rounded-2xl"
                />
                <div className=" w-auto mr-4 ml-4 h-5/10 mb-4 overflow-visible scrollbar-seting">
                  <strong className="flex justify-center text-center text-white">
                    {certificate.name.toUpperCase()}
                  </strong>
                  <p className="scrollbar-seting text-justify md:line-clamp-6 font-light text-blue-200">
                    {certificate.detail}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size={"sm"}
          className="text-white bg-blue-950 border-blue-950 hidden md:flex shadow-[0px_0px_6px_3px] shadow-blue-50"
        />
        <CarouselNext
          size={"sm"}
          className="text-white bg-blue-950 border-blue-950 hidden md:flex shadow-[0px_0px_6px_3px] shadow-blue-50"
        />
      </Carousel>
    </section>
  );
}

"use client";
import { BrainIcon, HeartPulse } from "lucide-react";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen p-8 pt-20 bg-blue-200 flex flex-wrap lg:text-lg"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 text-blue-100">
        <div className="spin-effect-about relative rounded-3xl h-[40vh] md:h-[50vh] lg:h-[40vh] w-[40vh]">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={500}
            height={500}
            loading="eager"
            className="h-full w-full about-profile object-cover object-top"
          />
        </div>
        <div className="md:w-6/10 m-4 mt-0 p-2 pt-0 flex flex-col gap-4 items-start justify-start text-justify">
          <p>
            Hello! I&apos;m Kesavan, a passionate developer with experience in
            building web applications using modern technologies. I love creating
            efficient and scalable solutions to solve real-world problems.
          </p>
          <p>
            My goal is to grow into a Softwarw Engineer, contribute to impactful
            projects, and build intuitive digital experiences that solve
            real-world problems.
          </p>

          <p>
            Practicing NextJS projects and learning advanced JavaScripte
            frameworks. Working on a Social Media Project and contributing to
            open source.
          </p>

          <p className="flex items-center justify-between text-yellow-100">
            <i className="pr-1 text-yellow-300">
              <BrainIcon size={20} />
            </i>
            <span className="flex text-center">
              Problem Solving, Team Collaboration, Communication, Time
              Management
            </span>
            <i className="pl-1 text-pink-300">
              <HeartPulse size={20} />
            </i>
          </p>
          <strong className="text-white text-lg">Skills:</strong>
          <div className="flex gap-2 flex-wrap items-center justify-start text-white">
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <FaHtml5 size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <FaCss3 size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <FaJs size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiTailwindcss size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <FaReact size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiRedux size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <FaNodeJs size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiExpress size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiMongodb size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiMongoose size={30} />
            </i>
            <i className="rounded-2xl p-3 hover-effect bg-blue-950">
              <SiNextdotjs size={30} />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}

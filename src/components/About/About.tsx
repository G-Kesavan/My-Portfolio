import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
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
      className="md:h-screen min-h-screen p-8 pt-20 bg-blue-200 flex flex-wrap"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
        <div className="spin-effect-sm relative rounded-3xl h-[40vh] md:h-[50vh] lg:h-[60vh] w-auto">
          <Image
            src="/images/profile.png"
            alt="profile"
            width="100"
            height="100"
            className="h-full w-auto rounded-3xl about-profile "
          />
        </div>
        <div className="md:w-5/10 m-4 p-2 flex flex-col gap-4 items-start justify-start">
          <p>
            Hello! I&apos;m Kesavan, a passionate developer with experience in
            building web applications using modern technologies. I love creating
            efficient and scalable solutions to solve real-world problems.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ab
            autem similique quod eum esse quo adipisci optio sunt quae, labore
            blanditiis dolore, est dolores sapiente cupiditate voluptatum
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ab
            autem similique quod eum esse quo adipisci optio sunt quae, labore
            blanditiis dolore, est dolores sapiente cupiditate voluptatum
          </p>
          <strong>Skills:</strong>
          <div  className="flex gap-2 flex-wrap items-center justify-start text-white">
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <FaHtml5 size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <FaCss3 size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <FaJs size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiTailwindcss size={30}/>
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <FaReact size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiRedux size={30}/>
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <FaNodeJs size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiExpress size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiMongodb size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiMongoose size={30} />
            </i>
            <i className="border-2 rounded-2xl p-2 hover-effect bg-blue-950">
              <SiNextdotjs size={30} />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}

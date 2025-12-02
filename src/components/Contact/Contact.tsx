"use client";
import { FaUser } from "react-icons/fa";
import { MdPhone, MdFileCopy, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const copyFun = (x: string) => {
    const copyText = document.querySelector(`.${x}`)?.textContent;
    navigator.clipboard.writeText(String(copyText));
  };
  return (
    <section
      id="contact"
      className="md:h-screen min-h-screen p-8 pt-25 bg-blue-100 flex flex-col"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row w-full gap-10 md:h-[60vh] md:justify-center">
        <form className="md:w-4/10 w-full p-6 bg-blue-900 rounded-2xl flex flex-col justify-center">
          <label className="block text-light-blue-800 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border border-light-blue-400 rounded"
            type="text"
            id="name"
            name="name"
            autoComplete="name"
          />

          <label className="block text-light-blue-800 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-light-blue-400 rounded"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
          />

          <label className="block text-light-blue-800 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-light-blue-400 rounded"
            id="message"
            name="message"
            autoComplete="message"
            rows={4}
          ></textarea>

          <button
            className="flex mt-3 ml-auto hover-effect mr-auto bg-blue-950 px-4 py-2 rounded-full hover:bg-blue-50 hover:text-black transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center flex-col md:w-4/10 gap-5 bg-blue-900 p-6 rounded-2xl text-white">
          <strong className="text-justify text-lg font-normal">
            Get in touch with us for inquiries, support, or feedback.We&apos;re
            here to hel you every step of the way
          </strong>
          <ul className="flex flex-col gap-2 font-light text-lg">
            <li className="flex justify-between">
              <i>
                <FaUser size={21} />
              </i>
              <p className="copyName">Kesava Perumal G</p>
              <i className="text-neutral-300 hover-effect">
                <MdFileCopy size={20} onClick={() => copyFun("copyName")} />
              </i>
            </li>
            <li className="flex justify-between">
              <i>
                <SiGmail size={21} />
              </i>
              <p className="copyMail">mr.kesavaperumal@gmail.com</p>
              <i className="text-neutral-300 hover-effect">
                <MdFileCopy size={20} onClick={() => copyFun("copyMail")} />
              </i>
            </li>
            <li className="flex justify-between">
              <i>
                <MdPhone size={25} />
              </i>
              <p className="copyPhone">+91 63 74 79 02 92</p>
              <i className="text-neutral-300 hover-effect">
                <MdFileCopy size={20} onClick={() => copyFun("copyPhone")} />
              </i>
            </li>
            <li className="flex justify-between">
              <i>
                <MdLocationOn size={25} />
              </i>
              <p className="copyLocation overflow-auto w-8/10 text-center">
                8/277, Velikunan Kurichi, Virudhachalam TK, Cuddaloar, Tamil
                nadu - 607 804
              </p>
              <i className="text-neutral-300 hover-effect">
                <MdFileCopy size={20} onClick={() => copyFun("copyLocation")} />
              </i>
            </li>
          </ul>
          <ul className="flex justify-around">
            <li className="border p-3 rounded-2xl hover-effect bg-blue-950">
              <a href="https://wa.me/6374790292">
                <FaWhatsapp size={45} />
              </a>
            </li>
            <li className="border p-3 rounded-2xl hover-effect bg-blue-950">
              <a href="tel:+916374790292">
                <MdPhone size={45} />
              </a>
            </li>
            <li className="border p-3 rounded-2xl hover-effect bg-blue-950">
              <a href="https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin size={45} />
              </a>
            </li>
            <li className="border p-3 rounded-2xl hover-effect bg-blue-950">
              <a href="https://t.me/KESAVAN420BOY">
                <FaTelegram size={45} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

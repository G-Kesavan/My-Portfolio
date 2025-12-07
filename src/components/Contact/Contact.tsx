"use client";
import { FaUser } from "react-icons/fa";
import { MdPhone, MdFileCopy, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const copyFun = (x: string) => {
    const copyText = document.querySelector(`.${x}`)?.textContent;
    navigator.clipboard.writeText(String(copyText));
    toast.success(`${x.slice(4).replace("_", " ")} is copied ✅`,{position: "top-center",autoClose: 3000});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send_message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, message }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message is sented ✅",{position: "top-center",autoClose: 3000,theme: "colored",});
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Message failed ❌ Please try again.",{position: "top-center",autoClose: 3000,theme: "colored",});
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="lg:h-screen min-h-screen p-8 pt-25 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6 flex justify-center w-full">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row w-full md:w-17/20 xl:w-7/10 gap-10 lg:h-[60vh] md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-950 lg:w-5/10 w-full p-8 rounded-2xl flex flex-col justify-center shadow-[0px_0px_12px_5px] shadow-blue-200"
        >
          <label className="block text-light-blue-800 mb-2" htmlFor="name"> 
            Name 
          </label>
          <input
            className="w-full p-2 border border-light-blue-400 rounded"
            id="name"
            autoComplete="name"
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label className="block text-light-blue-800 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full p-2 border border-light-blue-400 rounded"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className="block text-light-blue-800 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-light-blue-400 rounded"
            autoComplete="message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={4}
          ></textarea>

          <button
            className="flex mt-3 ml-auto hover-effect mr-auto bg-blue-950 px-4 py-2 rounded-full hover:bg-blue-50 hover:text-black"
            type="submit"
            disabled={loading}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
        <div className="bg-blue-950 flex justify-center items-center flex-col lg:w-5/10 gap-5 p-6 rounded-2xl text-white shadow-[0px_0px_12px_5px] shadow-blue-200">
          <strong className="text-justify text-lg font-normal">
            Get in touch with us for inquiries, support, or feedback. We&apos;re
            here to hel you every step of the way
          </strong>
          <ul className="flex flex-col gap-2 font-light text-lg p-3">
            <li className="flex justify-between">
              <i>
                <FaUser size={21} />
              </i>
              <p className="copyName">Kesava Perumal G</p>
              <i className="text-blue-50 hover-effect cursor-pointer">
                <MdFileCopy size={20} onClick={() => copyFun("copyName")} />
              </i>
            </li>
            <li className="flex justify-between">
              <i>
                <SiGmail size={21} />
              </i>
              <p className="copyMail_address overflow-hidden mr-4 ml-4 text-center flex flex-wrap justify-center items-center">
                <span>mr.kesavaperumal</span>
                <span>@gmail.com </span>
              </p>
              <i className="text-blue-50 hover-effect cursor-pointer">
                <MdFileCopy
                  size={20}
                  onClick={() => copyFun("copyMail_address")}
                />
              </i>
            </li>
            <li className="flex justify-between">
              <i>
                <MdPhone size={25} />
              </i>
              <p className="copyPhone_Number">+91 63 74 79 02 92</p>
              <i className="text-blue-50 hover-effect cursor-pointer">
                <MdFileCopy
                  size={20}
                  onClick={() => copyFun("copyPhone_Number")}
                />
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
              <i className="text-blue-50 hover-effect cursor-pointer">
                <MdFileCopy size={20} onClick={() => copyFun("copyLocation")} />
              </i>
            </li>
          </ul>
          <ul className="flex justify-around items-center w-fit gap-3 md:gap-5">
            <li className="p-2 md:p-3 rounded-2xl hover-effect bg-blue-50 text-blue-950">
              <a href="https://wa.me/6374790292">
                <FaWhatsapp size={40} />
              </a>
            </li>
            <li className="p-2 md:p-3 rounded-2xl hover-effect bg-blue-50 text-blue-950">
              <a href="tel:+916374790292">
                <MdPhone size={40} />
              </a>
            </li>
            <li className="p-2 md:p-3 rounded-2xl hover-effect bg-blue-50 text-blue-950">
              <a href="https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin size={40} />
              </a>
            </li>
            <li className="p-2 md:p-3 rounded-2xl hover-effect bg-blue-50 text-blue-950">
              <a href="https://t.me/KESAVAN420BOY">
                <FaTelegram size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

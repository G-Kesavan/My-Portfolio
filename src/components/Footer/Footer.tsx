import { MdPhone } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black flex flex-col md:flex-row gap-2 p-2 md:justify-around md:items-center text-amber-50 mt-5">
      <ul className="flex justify-around p-2">
        <li className="p-2 hover-effect">
          <a href="#hero">Home</a>
        </li>
        <li className="p-2 hover-effect">
          <a href="#about">About</a>
        </li>
        <li className="p-2 hover-effect">
          <a href="#certificates">Certificates</a>
        </li>
        <li className="p-2 hover-effect">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="flex justify-around md:p-2">
        <a
          className="flex hover-effect p-2"
          href="mailto:mr.kesavaperumal@gmail.com"
        >
          <i className="border p-2 rounded-full flex items-center">
            <SiGmail size={32} />
          </i>
        </a>
        <a className="flex hover-effect p-2" href="https://wa.me/6374790292">
          <i className="border p-2 rounded-full flex items-center">
            <FaWhatsapp fontSize="38px" />
          </i>
        </a>
        <a className="flex hover-effect p-2" href="tel:+916374790292">
          <i className="border p-2 rounded-full flex items-center">
            <MdPhone fontSize="36px" />
          </i>
        </a>
        <a
          className="flex hover-effect p-2"
          href="https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <i className="border p-2 rounded-full flex items-center">
            <FaLinkedin fontSize="36px" />
          </i>
        </a>
      </div>
      <div className="flex justify-around p-2">
        <p>Copyright &copy; {currentYear} Designned by Kesavan</p>
      </div>
    </footer>
  );
}

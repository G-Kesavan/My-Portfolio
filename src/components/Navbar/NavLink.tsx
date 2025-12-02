"use client";
export default function NavLink() {
  return (
    <div className="md:flex  hidden gap-4">
      <a
        href="#hero"
        className="hover:border-b-4 hover:text-blue-950 hover:font-bold mt-auto mb-auto"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:border-b-4 hover:text-blue-950 hover:font-bold mt-auto mb-auto"
      >
        About
      </a>
      <a
        href="#projects"
        className="hover:border-b-4 hover:text-blue-950 hover:font-bold mt-auto mb-auto"
      >
        Projects
      </a>
      <a
        href="#certificates"
        className="hover:border-b-4 hover:text-blue-950 hover:font-bold mt-auto mb-auto"
      >
        Certificates
      </a>
      <a
        href="#contact"
        className="hover:border-b-4 hover:text-blue-950 hover:font-bold mt-auto mb-auto"
      >
        Contact
      </a>
    </div>
  );
}

import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contacts/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main-container bg-amber-400">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

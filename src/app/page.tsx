import About from "@/src/components/About";
import Certifications from "@/src/components/Certifications";
import Contact from "@/src/components/Contact";
import Experience from "@/src/components/Experience";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <Menu />
      <main className="main-container bg-amber-400">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}

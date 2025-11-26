import About from "@/src/pages/About";
import Certifications from "@/src/pages/Certifications";
import Contact from "@/src/pages/Contact";
import Experience from "@/src/pages/Experience";
import Home from "@/src/pages/Home";
import Projects from "@/src/pages/Projects";
import Skills from "@/src/pages/Skills";

export default function App() {
  return (
    <main className="bg-amber-400">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}

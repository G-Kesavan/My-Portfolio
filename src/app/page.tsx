import About from "@/src/components/About";
import Certifications from "@/src/components/Certifications";
import Contact from "@/src/components/Contact";
import Experience from "@/src/components/Experience";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";

export default function App() {
  return (
    <main className="bg-amber-400">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}

import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
      <Footer/>
    </>
  );
}

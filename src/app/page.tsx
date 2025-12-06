import About from "@/components/About/About";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <main className="main-container">
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

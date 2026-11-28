import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="theme-bg overflow-hidden">
      <section id="home">
        <Hero />
        <About />
         <Skills />
         <Projects/>
         <Experience />
         <Contact />
      </section>
    </div>
  );
}

import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProjects";
import CareerTimeline from "../components/CareerTimeline";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="theme-bg overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutPreview />
      </section>

      <section id="skills">
        <TechStack />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="experience">
        <CareerTimeline />
      </section>

      <section id="contact">
        <ContactCTA />
      </section>
    </main>
  );
}

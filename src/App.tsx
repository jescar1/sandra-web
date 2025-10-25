import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { Calculator } from "./components/Calculator";
import { FAQ } from "./components/FAQ";
import { TrustIndicators } from "./components/TrustIndicators";
import { Resources } from "./components/Resources";
import { Partners } from "./components/Partners";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section id="home">
          <Hero />
        </section>

      <section id="partners">
          <Partners />
        </section>

      <section id="trust-indicators">
          <TrustIndicators />
        </section>

      <section id="services">
          <Services />
        </section>
        

      <Stats />
      <Process />
      <section id="calculator">
          <Calculator />
        </section>

      <Benefits />
      <section id="testimonials">
          <Testimonials />
        </section>
      <section id="about">
          <About />
        </section>

      <section id="resources">
          <Resources />
        </section>

      <FAQ />
      <CTA />
      <section id="contact">
          <Contact />
        </section>

    </div>
  );
}
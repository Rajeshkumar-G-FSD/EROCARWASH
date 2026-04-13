/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Protocol from "./components/Protocol";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <Protocol />
        <section id="pricing">
          <Pricing />
        </section>
        <Features />
        <section id="gallery">
          <Portfolio />
        </section>
        <Testimonials />
        <section id="studio">
          <Booking />
        </section>
      </main>
      <Footer />
    </div>
  );
}


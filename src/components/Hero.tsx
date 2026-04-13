import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "The Art of the Detail",
      title: <>Premium Care <br />for Your Car</>,
      description: "Ero Car Wash – Shine Beyond Expectations. We treat every vehicle as a masterpiece, utilizing surgical precision and the world's finest organic cleansers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhXjzaAvsw3-mzptRvH5Oy58utF9to2cRfmoe_4qa_t1ES5QE2LnzMtrfjeoVEbAjMXZPltCkQ2IXs3PwG6gN-3dg0tmOdaK5nHRCs7FNmxUiGKtzrFBDgrh3XKZ3W3ZeVG1QWidQaLww-ZA6olQyrEUJviSYU3Z-XhqRAjBibiNl00tLMkkeZqCtakwRMR8IiJIAmwuIKTkU6HepP0RJ-6aNazHsBgntHGbCMn6-Vz7eaf6xjWaUcZH3aihZOjF8nPdxZ0xIZiUju",
      primaryBtn: "Book Your Session",
      secondaryBtn: "View Services"
    },
    {
      subtitle: "Summer Special Offer",
      title: <>Cool Deals <br />Hot Shine</>,
      description: "Get up to 20% off on our Executive and Ultimate detailing packages. Keep your car protected from the summer heat. Valid until May 31st.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnHjXoV2WmsF08Nq0VJE0uqES9ZcfbJ_Frn-Vwc-3gXTE5cGf0-YCN0-gwH2MnnTq-Juy-PjyJgpmFiLt_p9f0ad8F2iM7ZGfngUgm7PWdrEM88lvnS6hLZ7FEsB4VZC9d4-tu8k0BI6J_uPTYj-ja-yttw0qVjgdojQU2rfaYf3MYIK9tceKKuQXpobqgwOjtDPh7ze1Md5JO32XeXBWrS5SisyG0BWPNhic04i_Yov7xhDVKmO6PG537yolPamDP2lFvc4OcNTmW",
      primaryBtn: "Claim Summer Offer",
      secondaryBtn: "Pricing Tiers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <header className="relative min-h-screen pt-20 overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            className="w-full h-full object-cover grayscale-[20%] opacity-90" 
            src={slides[currentSlide].image}
            alt={slides[currentSlide].subtitle}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-[calc(100vh-80px)] flex items-center w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-extrabold mb-4 block">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-on-surface-variant font-light mb-10 leading-relaxed max-w-lg">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary-dim transition-all ambient-shadow"
              >
                {slides[currentSlide].primaryBtn}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById(currentSlide === 0 ? 'services' : 'pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-all"
              >
                {slides[currentSlide].secondaryBtn}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination & Controls */}
      <div className="absolute bottom-12 left-8 z-20 flex items-center gap-8">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === i ? "w-12 bg-primary" : "w-4 bg-outline-variant/30"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}


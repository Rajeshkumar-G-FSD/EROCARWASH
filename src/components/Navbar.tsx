import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tighter text-on-surface">
          Ero Car Wash
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-colors">Services</a>
          <a href="#gallery" className="text-sm font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-colors">Gallery</a>
          <a href="#pricing" className="text-sm font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-colors">Pricing</a>
          <a href="#studio" className="text-sm font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-colors">Studio</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-bold tracking-tight ambient-shadow"
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  );
}

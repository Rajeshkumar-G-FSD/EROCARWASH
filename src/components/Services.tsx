import { motion } from "motion/react";
import { ArrowRight, Car, Zap, Droplets, ShieldCheck, Wind } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 bg-background px-8">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">The Studio Services</h2>
            <p className="text-on-surface-variant max-w-lg">Curated treatments designed to preserve, protect, and enhance your vehicle's aesthetic integrity.</p>
          </div>
          <div className="text-primary font-bold tracking-widest text-xs uppercase underline decoration-primary/20 cursor-pointer hover:text-primary-dim transition-colors">
            Explore All Tiers
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Card: Full Car Detailing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-lowest ambient-shadow p-8 flex flex-col justify-between min-h-[450px]"
          >
            <div className="relative z-10">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold mb-4 inline-block tracking-widest uppercase">
                Signature
              </span>
              <h3 className="text-3xl font-bold mb-2">Full Car Detailing</h3>
              <p className="text-on-surface-variant max-w-xs">A comprehensive 8-hour restoration process for the ultimate showroom finish.</p>
            </div>
            
            <div className="relative z-10 flex justify-between items-end">
              <span className="text-2xl font-light italic">Starts at ₹24,999</span>
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
            
            <img 
              className="absolute right-0 bottom-0 w-1/2 h-4/5 object-cover rounded-tl-[100px] grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnHjXoV2WmsF08Nq0VJE0uqES9ZcfbJ_Frn-Vwc-3gXTE5cGf0-YCN0-gwH2MnnTq-Juy-PjyJgpmFiLt_p9f0ad8F2iM7ZGfngUgm7PWdrEM88lvnS6hLZ7FEsB4VZC9d4-tu8k0BI6J_uPTYj-ja-yttw0qVjgdojQU2rfaYf3MYIK9tceKKuQXpobqgwOjtDPh7ze1Md5JO32XeXBWrS5SisyG0BWPNhic04i_Yov7xhDVKmO6PG537yolPamDP2lFvc4OcNTmW"
              alt="Detailing process"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Tall Card: Ceramic Coating */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 group overflow-hidden rounded-2xl bg-surface-container-low p-8 flex flex-col min-h-[450px]"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Ceramic Coating</h3>
              <p className="text-sm text-on-surface-variant">9H hardness protection that lasts years, not months.</p>
            </div>
            <div className="mt-auto">
              <img 
                className="w-full h-48 object-cover rounded-xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-7FZ_NRLo05iwxWQXbmoPFGhXMUAiM-6Wvrkj2MonlRF2poCdYTp5FrZ13wm7ROclgNDvHKm7_6QIXPERIHKUjJux1ZXdY-DlFFNJhTxUGJvkmnZ1QMrA6b27BZSxj9kzvtf4YUXVVLvfrgaS0J9rQH8dAj2Jv3l2wxf7ytz5YrF-JWsdO0x_7oWGPrNfSOCq9w9G1p7Bd0Sxl2L4PAEQ8BCNdV25cpI_h5mFDTjP4yigU2732MoukHXBN_m-Gl3GMKVac2PikM81"
                alt="Ceramic coating water beading"
                referrerPolicy="no-referrer"
              />
              <div className="flex justify-between items-center">
                <span className="font-bold">Premium Guard</span>
                <span className="text-primary font-extrabold">₹49,999+</span>
              </div>
            </div>
          </motion.div>

          {/* Small Grid Items */}
          <ServiceItem 
            icon={<Car size={24} />} 
            title="Exterior Wash" 
            desc="Hand-wash with pH neutral snow foam and scratch-free drying." 
            price="₹3,999 Session"
            className="md:col-span-4"
            delay={0.1}
          />
          <ServiceItem 
            icon={<Wind size={24} />} 
            title="Interior Cleaning" 
            desc="Steam sanitation and leather conditioning for a pristine cabin." 
            price="₹6,999 Session"
            className="md:col-span-4 bg-surface-container-low"
            iconBg="bg-secondary-container text-on-secondary-container"
            delay={0.2}
          />
          <ServiceItem 
            icon={<Droplets size={24} />} 
            title="Waterless Wash" 
            desc="Eco-friendly polymer-based cleaning for quick city maintenance." 
            price="₹2,999 Session"
            className="md:col-span-4"
            delay={0.3}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ServiceItem({ icon, title, desc, price, className = "", iconBg = "bg-tertiary-container text-tertiary", delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`group rounded-2xl bg-surface-container-lowest ambient-shadow p-6 flex flex-col ${className}`}
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant mb-4 flex-grow">{desc}</p>
      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{price}</span>
    </motion.div>
  );
}

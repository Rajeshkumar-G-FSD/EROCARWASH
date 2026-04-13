import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 text-center mb-16"
      >
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
          Summer Special Offer
        </span>
        <h2 className="text-4xl font-black tracking-tighter mb-4">Investment Tiers</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-2">Choose the level of care your vehicle deserves. All packages include our signature deionized water rinse.</p>
        <p className="text-primary font-bold text-sm uppercase tracking-widest">Offer valid until May 31st</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Basic */}
        <PricingCard 
          title="Essential"
          price="4,499"
          delay={0.1}
          features={[
            { text: "Snow Foam Hand Wash", included: true },
            { text: "Wheel & Tire Clean", included: true },
            { text: "Interior Vacuum", included: true },
            { text: "Engine Bay Detail", included: false },
          ]}
        />

        {/* Premium (Active) */}
        <PricingCard 
          title="Executive"
          price="11,999"
          recommended
          delay={0.2}
          features={[
            { text: "All Essential Features", included: true },
            { text: "Clay Bar Treatment", included: true },
            { text: "Hand Wax Polish", included: true },
            { text: "Leather Conditioning", included: true },
          ]}
        />

        {/* Ultimate */}
        <PricingCard 
          title="Ultimate"
          price="34,999"
          delay={0.3}
          features={[
            { text: "All Executive Features", included: true },
            { text: "1-Stage Paint Correction", included: true },
            { text: "Ceramic Spray Sealant", included: true },
            { text: "Full Steam Sanitation", included: true },
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({ title, price, features, recommended = false, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={`relative p-10 rounded-2xl flex flex-col transition-all duration-300 ${
        recommended 
          ? "bg-primary text-on-primary ambient-shadow scale-105 z-10" 
          : "bg-surface-container-lowest border border-surface-container hover:border-outline-variant/20"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary-container px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          Recommended
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-black mb-8">
        ₹{price} <span className={`text-sm font-normal tracking-normal ${recommended ? "text-on-primary/60" : "text-on-surface-variant"}`}>/ Session</span>
      </div>
      
      <ul className="space-y-4 mb-10 text-left flex-grow">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-center gap-3 text-sm ${!feature.included && !recommended ? "text-on-surface-variant/40 line-through" : ""}`}>
            {feature.included ? (
              <CheckCircle2 size={18} className={recommended ? "text-on-primary" : "text-primary"} />
            ) : (
              <XCircle size={18} className="opacity-40" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
        recommended 
          ? "bg-on-primary text-primary hover:bg-surface-container-low" 
          : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
      }`}>
        Select Tier
      </button>
    </motion.div>
  );
}

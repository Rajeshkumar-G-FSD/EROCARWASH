import { motion } from "motion/react";
import { Award, Leaf, Zap, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Award size={48} className="text-primary" />,
      title: "Professional Staff",
      desc: "Certified master detailers only."
    },
    {
      icon: <Leaf size={48} className="text-primary" />,
      title: "Eco-Friendly",
      desc: "100% biodegradable cleansers."
    },
    {
      icon: <Zap size={48} className="text-primary" />,
      title: "Fast Service",
      desc: "Precision without the wait."
    },
    {
      icon: <Cpu size={48} className="text-primary" />,
      title: "Advanced Equipment",
      desc: "Leading edge Italian technology."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>
              <h5 className="font-bold uppercase tracking-widest text-[10px] mb-2">{f.title}</h5>
              <p className="text-sm text-on-surface-variant">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

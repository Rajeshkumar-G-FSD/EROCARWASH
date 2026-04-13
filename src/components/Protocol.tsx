import { motion } from "motion/react";
import { Search, Waves, Sparkles, ShieldCheck } from "lucide-react";

export default function Protocol() {
  const steps = [
    {
      id: "01",
      icon: <Search className="text-primary" size={24} />,
      title: "Inspection",
      desc: "A 40-point surface analysis under studio lighting to identify imperfections."
    },
    {
      id: "02",
      icon: <Waves className="text-primary" size={24} />,
      title: "Washing",
      desc: "Two-bucket method with deionized water and premium snow foam."
    },
    {
      id: "03",
      icon: <Sparkles className="text-primary" size={24} />,
      title: "Polishing",
      desc: "Multi-stage machine buffing to achieve a mirror-like depth."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-12">The Ero <br />Protocol</h2>
            
            <div className="space-y-12">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-4xl font-extralight text-outline-variant">{step.id}</span>
                  <div>
                    <h4 className="text-xl font-bold flex items-center gap-2">
                      {step.icon}
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant mt-2 max-w-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                className="w-full aspect-[4/5] object-cover rounded-2xl grayscale ambient-shadow" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrmyDnn3Z4pDgveKf2vxF90WwjlL9DBSmFiwViJ5uJ07QxHigPdSmzid6-gISGS6Cv_EFesQqcuPOPgHo1urMkYSgKa7OH1taSAwmIzyxJm3dK8mpry8LtC-FkJv70D0Omx5h3xMJr3URGQWHpGD_h3Q-0rIAPyOFGQF5n3hTSl_jP4wVtx9BL9GiXlo3QnlNs-1GtVclx4bIjLdvDbZ4yfnfQbxz8qnvFNEGvxIT98VDBRhozW3tLl0K1t_St0ufovJlQ9fIHDW8"
                alt="Detailing inspection"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-8 rounded-2xl ambient-shadow hidden md:block max-w-[240px]"
            >
              <ShieldCheck className="text-primary mb-4" size={40} />
              <h5 className="font-bold mb-2">Final Check</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every inch reviewed by our Master Detailer before handover.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

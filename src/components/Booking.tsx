import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Booking() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black tracking-tighter mb-8">Secure Your <br />Session</h2>
            <p className="text-on-surface-variant mb-12 max-w-md">
              Due to high demand, we recommend booking at least 48 hours in advance. Our concierge will contact you to confirm the details.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Your Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" 
                    placeholder="+1 (555) 000-0000" 
                    type="tel"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Vehicle Type</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm appearance-none cursor-pointer">
                    <option>Sedan / Coupe</option>
                    <option>SUV / Truck</option>
                    <option>Luxury / Exotic</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Service Tier</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm appearance-none cursor-pointer">
                    <option>Essential Wash</option>
                    <option>Executive Detail</option>
                    <option>Ultimate Restoration</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Preferred Date & Time</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" 
                  type="datetime-local"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-dim transition-all ambient-shadow"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >            <div className="h-full min-h-[400px] bg-surface-container-highest rounded-2xl overflow-hidden mb-8 relative group">
              <img 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdn8YvVDnP8KaPO6S9Oo7iQmeXgNXmqySursdUShKpp6kumTsSeOI7tJHq-_WtiOxGNCabJPIVzlYAN4iBhfwfeP1ptl88Dp5lP-YX_c31HyzEYkeEgjF9zY4IrgzC9VZ1X5EaJ9503EGKHqfXm7gWA-6gk1BCg_W0-pssoZbHJ8WiJ1sMOWaibgzePQUjpErculZvZGG9bBWdX38ImmHl2XM_N3x6CT8gcFmibELNdpQT6GYH2RmvG7D26vRWqZKUfB09T1qw0VUY"
                alt="Studio location map"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="text-primary" size={48} fill="currentColor" />
                </motion.div>
                <div className="bg-surface-container-lowest px-4 py-2 rounded-full font-bold text-[10px] shadow-lg uppercase tracking-widest mt-2">
                  The Ero Studio
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h6 className="font-bold text-[10px] uppercase tracking-widest mb-4 text-primary">Location</h6>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  422 Studio Circle<br />Suite 100, Miami, FL
                </p>
              </div>
              <div>
                <h6 className="font-bold text-[10px] uppercase tracking-widest mb-4 text-primary">Hours</h6>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Mon-Sat: 8am - 8pm<br />Sun: By Appt. Only
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

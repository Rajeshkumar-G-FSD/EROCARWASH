import { motion } from "motion/react";

export default function Portfolio() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgiyChA8P1pMTUa8VPs_N7b8QkAIDJbhyMGJCxSB7l6mYKZnTWXL4trPGUojXzD7J4KyQHzYQAibBncSEdykLv9Dth6pwkRXLsaQ7EdilbZ4iiTWkteFBm21-aVzOo7wfqFurQIrg-7P-aECHJytWyTBYH4aPeDivz_dbo7IOaF4ZhnmicO_OBPZkChYb-91ZwzLWxIqEn7RkmCuMctFBxkvHEcEezHfhKVupFAjnviL3vDDohFLwkjUm5IHV6N7zqVvlasQXQhsA8",
      alt: "Luxury showroom",
      className: "col-span-2 row-span-2",
      delay: 0.1
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGRU5Wv8Njd3H3NmiQvqPmK2P6t7-_bbX-P5M6QoTgi2E2myiudOGbQS-2U06XacP71bnO-d00xluptafDlLKLRnzmQ01tfk_KC3hG2WbUJ53JvwhAbJm8V-sEEpQl8S2Eg587tbeCR2yAyDAGKVth-4L4ux4eSqiGwoh37xdnaaYafuhbCCeGrHvV-u_jo43hCDGmoFrGS07wGhx6a6VZ5KyKEF6v8CP4MnREPFeWlxlZVs1F6E4ynwztk_zSqm5QoYt_df3spf",
      alt: "Snow foam",
      className: "",
      delay: 0.2
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiRFCIpp-JVNatTowjQzaYAttD2sgf1Z8A4faJcQzPMr63qIH495jUvwLdAXBpjnpNTsjXWsesNZe8drTJlcVbp5u6C94LQFNV2OVmCVW8MgYVzln8oM3jv-ZJlKWGT5SiPfKcU6LKCf7jA5mu0K6xJn4KW-nLqgsIFHIBlf1JubmNqSeWz_z26c64dDDEVSedbYz_0bBGJNZwDe5APP2hzVPDLjrR6p0mhn_BioVywBQF1CT--yFfbMUhkcfrqZvlAJ2C38buvZWT",
      alt: "Leather conditioning",
      className: "",
      delay: 0.3
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjvxzhFXtufZOv2mvr5j277zbkqYt4xSHzSH0g--0jIB-khZhBHsP-CL1nclqOduQqJFOdaj0VdxXERCCCEGtsxojDGbsHsIGFvzsJfTQVuLsYOQdVmt_NWSnXkHpEekLdspPGpccsDa5lpy5A23xQiZir7ZJ5ECrLe6HGA3obsMdCx2DwtBVJF1hQe9cQYBwaAvsSuHUfiNgs_uVMQQfvdExaKUyOSgt9Vl5Yrz-GvQOZ6NZpcXggevoqSsAnryIdJ_iMgnHmP5kx",
      alt: "Wheel cleaning",
      className: "col-span-2",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black tracking-tighter mb-12 text-center"
        >
          Studio Portfolio
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: img.delay }}
              whileHover={{ scale: 1.02 }}
              className={`overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

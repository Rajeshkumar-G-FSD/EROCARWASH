import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "The attention to detail is bordering on obsessive. My car hasn't looked this good since the day I drove it off the lot.",
      author: "Marcus Thorne",
      role: "Porsche 911 Owner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWS46klMYPXSHeJHYnwV3VpJ5NM4WLKpUuQTAT8e3kIYAfTsSGgQPAKt_CnFBFrBrtnNnEV6XeqSisRW7dzIQ-UgYWvD7vMJBo6EfrnvFq8_Bc_p3mILPfzzTwrYvu6p0JqwzMH-McwD3UCYXL4loq8Ogdkho4s5lOoSMri7Te7MuCg-wPcr4eFch7QUoUxtad2vUwPM2Ikvixb6Zf8RCW_kpGwJzEdc-dM19DZ5no0-jRUWjr4aDSBKcMXUgpiSSOdd90G7FU7uFq"
    },
    {
      text: "A truly premium experience. The studio environment is as clean as the cars they finish. Highly recommended for enthusiasts.",
      author: "Elena Rodriguez",
      role: "Tesla Model S Owner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH5QXsF7JPjJzMoPsr6n5NBIN4crtNFVb0a6RvW7A3Seq8aOetwFy1ebDs_U93367j6wtVz7d78h7S3GXZd0TXGyoM1YABCM-Cd6uOEWmR8AYQvYGmtJyoHGkezgh7sy5mDNv0MwH3TB-sOn_48FI_4APfRccRr0ya2CChu2vczkGSUeycKp1irrAHelk77c7ckM6A2a_hFhcXdnarf-cpq7RICzNBQry5VPmLsguTPuvRRtNSu2FqB7yb3nQBAftjNdvM1m6uRu6v"
    },
    {
      text: "Zynapse is the only place I trust with my vintage collection. Their ceramic coating process is second to none.",
      author: "James Harrington",
      role: "Classic Car Collector",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZKN_1yCzAD5YnWzr_RtqQs2D0F37D-pZOQz5VC4OX3l1vyBavj2hf0NaPZJXVOI7E8DXOvqFMlw9sk5VNOgBYeOhGSzR8tBaCecF7ElzhjzHHsrxHQfGbdsB3f4Wau_8LueSY7erOIyWPGl9C9ei5ES5dfUJEOqfSMOBIx1Ok_Zzl7TEIMbYkfNxqfNceIM0NFqNvEql0Tn-oqXfMLs1kDQthF6RF763QD-o0U8HlnVuRjF2E2H3883XctqE0w_3I0JPzjzdlsPg1"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-on-surface mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  className="w-12 h-12 rounded-full grayscale" 
                  src={review.image}
                  alt={review.author}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-sm">{review.author}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

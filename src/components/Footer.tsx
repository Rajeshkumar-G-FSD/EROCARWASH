import { Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-24 pb-12 bg-surface-container-low border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-2xl font-black tracking-tighter text-on-surface mb-6">
              Ero Car Wash
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-xs">
              Redefining automotive care through precision, passion, and the finest organic cleansers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold text-on-surface text-xs uppercase tracking-widest mb-6">Services</h6>
            <ul className="space-y-4">
              <li><FooterLink>Ceramic Coating</FooterLink></li>
              <li><FooterLink>Interior Detailing</FooterLink></li>
              <li><FooterLink>Paint Protection</FooterLink></li>
              <li><FooterLink>Window Tinting</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-bold text-on-surface text-xs uppercase tracking-widest mb-6">Company</h6>
            <ul className="space-y-4">
              <li><FooterLink>Careers</FooterLink></li>
              <li><FooterLink>Privacy Policy</FooterLink></li>
              <li><FooterLink>Terms of Service</FooterLink></li>
              <li><FooterLink>Contact Us</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-bold text-on-surface text-xs uppercase tracking-widest mb-6">Newsletter</h6>
            <p className="text-on-surface-variant text-sm mb-6">
              Join our inner circle for exclusive maintenance tips and studio updates.
            </p>
            <div className="flex gap-2">
              <input 
                className="bg-surface-container-lowest border-none rounded-full px-6 py-3 text-sm w-full focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-bold hover:bg-primary-dim transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-surface-container text-center">
          <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ero Car Wash pvt ltd. The Art of the Detail.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children }) {
  return (
    <a href="#" className="text-on-surface-variant hover:text-on-surface text-sm transition-colors border-b border-transparent hover:border-on-surface-variant/30 pb-0.5">
      {children}
    </a>
  );
}

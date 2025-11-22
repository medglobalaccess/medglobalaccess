import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import logo from "@/assets/logo-footer.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 relative overflow-hidden mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="block">
              <img src={logo} alt="MedGlobalAccess" className="h-20 w-auto rounded-lg" />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Connecting patients from across the globe to world-class medical care in India. We ensure a seamless journey towards better health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Packages', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 1 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'IVF & Fertility', path: '/services/ivf' },
                { name: 'Organ Transplant', path: '/services/transplantation' },
                { name: 'Cardiology', path: '/services/cardiology' },
                { name: 'Orthopedics', path: '/services/orthopedics' },
                { name: 'Oncology', path: '/services/oncology' },
                { name: 'Neurology', path: '/services/neurology' },
                { name: 'Gastroenterology', path: '/services/gastroenterology' },
                { name: 'Nephrology', path: '/services/nephrology' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              More Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Ophthalmology', path: '/services/ophthalmology' },
                { name: 'ENT', path: '/services/ent' },
                { name: 'Dentistry', path: '/services/dentistry' },
                { name: 'Vascular Surgery', path: '/services/vascular' },
                { name: 'Plastic Surgery', path: '/services/plastic-surgery' },
                { name: 'General Medicine', path: '/services/general-medicine' },
                { name: 'Pulmonology', path: '/services/pulmonology' },
                { name: 'Dermatology', path: '/services/dermatology' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-full text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+919154262424" className="hover:text-primary transition-colors">+91 9154262424</a>
                  <a href="tel:+919154264242" className="hover:text-primary transition-colors">+91 9154264242</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-full text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@medglobalaccess.in" className="hover:text-primary transition-colors break-all">
                  info@medglobalaccess.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-full text-primary shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} MedGlobalAccess. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-slate-400 hover:text-primary transition-colors group"
            >
              <span>Back to Top</span>
              <div className="bg-slate-800 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

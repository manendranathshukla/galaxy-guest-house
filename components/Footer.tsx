import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_ITEMS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={IMAGES.LOGO} 
                alt="Galaxy Logo" 
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-700" 
              />
              <span className="font-serif text-2xl font-bold text-white">
                Galaxy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the universe of luxury. Your comfort is our mission, serving you the best hospitality in the galaxy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Restaurant Dining</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Event Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Spa & Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Airport Shuttle</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive special offers and news.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Galaxy Guest House & Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
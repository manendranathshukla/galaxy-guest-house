import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <Rocket className={`h-8 w-8 ${isScrolled ? 'text-accent' : 'text-white'}`} />
              <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
                Galaxy
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider ${
                  isScrolled ? 'text-gray-200' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#rooms" 
              className="bg-secondary hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-secondary focus:outline-none ${isScrolled ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-primary shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:text-secondary hover:bg-emerald-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#rooms"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-secondary text-white px-4 py-3 rounded-md font-medium hover:bg-pink-600"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
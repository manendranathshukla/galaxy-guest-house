import React from 'react';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: `url(${IMAGES.HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-secondary font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          Welcome to Luxury
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Galaxy Guest House <br/> <span className="text-accent">& Restaurant</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
          Experience the stellar comfort and gastronomic delights in the heart of the city. Your journey to relaxation begins here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#rooms" 
            className="bg-secondary hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-pink-500/30"
          >
            Check Availability
          </a>
          <a 
            href="#about" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-lg px-8 py-4 rounded-full font-semibold transition-all"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity">
          <ChevronDown className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
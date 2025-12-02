import React from 'react';
import { IMAGES } from '../constants';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.ABOUT_SECTION} 
                alt="Galaxy Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary max-w-xs hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-primary font-bold text-lg">5-Star Experience</p>
              <p className="text-gray-500 text-sm">Rated best in class by our lovely guests.</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              A Universe of Comfort <br /> Awaits You
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a vision to provide out-of-this-world hospitality, Galaxy Guest House merges modern luxury with warm, traditional service. Located centrally, we offer a tranquil escape from the bustling city life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are here for a business trip, a romantic getaway, or a family vacation, our premium amenities and world-class restaurant ensure a stellar stay.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="text-3xl font-bold text-primary">150+</h4>
                <p className="text-gray-500">Premium Rooms</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="text-3xl font-bold text-primary">15k+</h4>
                <p className="text-gray-500">Happy Guests</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
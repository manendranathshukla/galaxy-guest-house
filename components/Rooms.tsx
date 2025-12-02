import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Check } from 'lucide-react';
import BookingModal from './BookingModal';
import { Room } from '../types';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Accommodation</span>
          <h2 className="mt-2 text-4xl font-serif font-bold text-primary">
            Luxurious Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {ROOMS.map((room) => (
            <div key={room.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-primary font-bold shadow-sm">
                  {room.price}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {room.description}
                </p>
                
                <div className="mb-8 space-y-2">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => handleOpenBooking(room)}
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors flex justify-center items-center group-hover:bg-secondary"
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal 
        room={selectedRoom} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Rooms;
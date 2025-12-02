import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User, Mail, MessageSquare, CheckCircle, Loader2, Info } from 'lucide-react';
import { Room } from '../types';

interface BookingModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ room, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    specialRequests: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: 1,
        name: '',
        email: '',
        specialRequests: ''
      });
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !room) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking Payload:', {
        roomId: room.id,
        roomName: room.name,
        price: room.price,
        ...formData
      });
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center animate-bounce-in">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-primary mb-3">Booking Received!</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>.<br/>
            We've received your request for the <span className="text-secondary font-medium">{room.name}</span>.
            <br/><br/>
            A confirmation email has been sent to <span className="text-gray-900">{formData.email}</span>.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-primary p-6 md:p-8 text-white flex justify-between items-start shrink-0 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-emerald-100">
              Reservation
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold">{room.name}</h3>
            <p className="text-emerald-200 mt-1 flex items-center gap-2">
              <span className="font-semibold text-white">{room.price}</span>
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="relative z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Scrollable Form Area */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" /> Check-in Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                  value={formData.checkIn}
                  onChange={e => setFormData({...formData, checkIn: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" /> Check-out Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                  value={formData.checkOut}
                  onChange={e => setFormData({...formData, checkOut: e.target.value})}
                />
              </div>
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" /> Number of Guests
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="10"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Guests</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100"></div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Anderson"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-secondary" /> Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Late check-in, dietary requirements, airport transfer..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                value={formData.specialRequests}
                onChange={e => setFormData({...formData, specialRequests: e.target.value})}
              ></textarea>
            </div>

            {/* Important Info Box */}
            <div className="bg-blue-50 p-4 rounded-xl flex gap-3 text-sm text-blue-800">
              <Info className="w-5 h-5 shrink-0" />
              <p>
                This is a booking request. No payment is processed at this time. 
                Our team will contact you within 24 hours to confirm availability and payment details.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-pink-600 active:scale-[0.99] transition-all shadow-lg hover:shadow-pink-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3 text-lg"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Processing Reservation...
                </>
              ) : (
                <>
                  Confirm Booking Request
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;